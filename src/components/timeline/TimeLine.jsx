import React, { useEffect } from 'react';
import "./TimeLine.css";
import Share from "../share/Share";
import Post from '../post/Post';
// import { Posts } from "../../dummyData";
import axios from "axios";
import { useState } from 'react';


export default function TimeLine() {
  const [posts, setPosts] = useState([]);

  // 1回だけ誘発させる
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts/timeline/642c1c0422abdc5da422d14f");
      console.log("test");
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        { posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}
