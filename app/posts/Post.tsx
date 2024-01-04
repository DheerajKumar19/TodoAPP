"use client";
import { useEffect, useState } from "react";

const Post = () => {
  const baseURL = "http://localhost:3001/comments";
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = fetch(baseURL, { cache: "no-store" });
        const data = (await result).json;
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
  }, [baseURL]);
  
  return (
    <div className="w-screen h-screen flex text-center justify-center bg-slate-600">
      <div className="bg-gray-700 border-2 shadow-xl px-8 py-5 w-1/2 h-1/2 mt-5 text-center">
        <h1>Posts</h1>
      </div>
    </div>
  );
};

export default Post;
