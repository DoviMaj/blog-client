import Hero from "../components/Hero";
import Post from "../components/Post";

function Blog({ posts }) {
  return (
    <ul>
      <Hero />
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://dovimaj-blog-api.herokuapp.com/api/posts");
  const resJson = await res.json();
  const posts = resJson.posts;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default Blog;
