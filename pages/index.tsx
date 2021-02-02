import React from "react";
import Hero from "../components/Hero";
import PostList from "../components/PostList";
import { GetStaticProps } from "next";

const Blog = ({ posts }) => {
  return (
    <>
      <Hero />
      <PostList posts={posts} />
    </>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
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
};

export default Blog;
