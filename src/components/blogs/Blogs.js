import React from "react";
import "./Blogs.css";
import BlogCard from "../../components/bloglist/BlogList";
import { blogSection } from "../../data";
export default function Blogs() {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className={"subTitle blog-subtitle"}>{blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.blogs.map((blog, key) => {
            return (
              <BlogCard
                key={key}
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
