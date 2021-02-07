import { GetStaticProps, GetStaticPaths } from "next";
import SinglePost from "../../components/SinglePost";

interface Props {
  post: Object;
  comments: Object;
}

const Post: React.FC<Props> = ({ post, comments }) => {
  return <SinglePost post={post} comments={comments} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://dovimaj-blog-api.herokuapp.com/api/posts");
  const resJson = await res.json();
  const posts = resJson.posts;

  const paths = posts.map((post: any) => `/posts/${post._id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const req = await fetch(
    `https://dovimaj-blog-api.herokuapp.com/api/posts/${params.id}`
  );
  const resJson = await req.json();
  const post = resJson.post;

  const commentsRes = await fetch(
    `https://dovimaj-blog-api.herokuapp.com/api/posts/${params.id}/comments`
  );

  const commentsResJson = await commentsRes.json();
  let comments = commentsResJson.comments;
  if (!comments) {
    comments = null;
  }
  return {
    props: { post, comments },
    revalidate: 1,
  };
};

export default Post;
