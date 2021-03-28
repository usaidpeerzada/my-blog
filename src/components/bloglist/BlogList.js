import { React, useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../card/Card";
import "./BlogList.css";
export default function BlogList() {
  const [blogState, setBlogState] = useState([]);
  useEffect(() => {
    getDevToPosts();
  }, []);
  const getDevToPosts = () => {
    axios
      .get("https://dev.to/api/articles?username=usaidpeerzada")
      .then((res) => {
        setBlogState(res.data);
      });
  };
  return (
    <div className="blog-cards">
      {blogState &&
        blogState.map((post) => {
          return (
            <BlogCard
              key={post.id}
              name={post.title}
              likes={post.positive_reactions_count}
              description={post.description}
              image={post.social_image}
              link={post.url}
              date={post.readable_publish_date}
            />
          );
        })}
    </div>
  );
}
