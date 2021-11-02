import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/617f4bca4fdd3a0fca057424');
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.length > 0 && posts.map((p) => <Post key={p._id} post={p} />)}
      </div>
    </div>
  );
}
