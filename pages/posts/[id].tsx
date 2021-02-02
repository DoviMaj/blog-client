import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";

interface Post {
  region: string;
  country: string;
  locale: string;
  company: string;
}

function Post({ post }) {
  return (
    <div>
      <Link href="/">Back</Link>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
  );
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch("https://dovimaj-blog-api.herokuapp.com/api/posts");
  const resJson = await res.json();
  const posts = resJson.posts;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/posts/${post._id}`);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://dovimaj-blog-api.herokuapp.com/api/posts/${params.id}`
  );
  const resJson = await res.json();
  const post = resJson.post;
  // Pass post data to the page via props
  return {
    props: { post },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};

export default Post;