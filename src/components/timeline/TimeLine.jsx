import React, { useEffect } from 'react';
import "./TimeLine.css";
import Share from "../share/Share";
import Post from '../post/Post';
// import { Posts } from "../../dummyData";
import axios from "axios";
import { useState } from 'react';
import { ConstructionOutlined } from '@mui/icons-material';




export default function TimeLine({username}) {
  const [posts, setPosts] = useState([]);
// console.log(username);
  // usernameが更新される度レンダリング発火
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/642c1c0422abdc5da422d14f");
     
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        { posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
