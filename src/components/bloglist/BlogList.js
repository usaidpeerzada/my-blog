import { React, useEffect, useState } from "react";
import axios from "axios";
import "./BlogList.css";

export default function BlogList() {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
  const [blogState, setBlogState] = useState([]);
  useEffect(() => {
    getDevToPosts();
  }, []);
  const getDevToPosts = () => {
    axios
      .get("https://dev.to/api/articles?username=usaidpeerzada")
      .then((res) => {
        console.log(...res.data);
        setBlogState(res.data);
      });
  };
  return (
    <>
      {blogState &&
        blogState.map((post) => {
          return (
            <div
              key={post.id}
              className="main-blog-container"
              onClick={() => openUrlInNewTab(post.url)}
            >
              <div className={"blog-container"}>
                <a className={"blog-card"} href="#blog">
                  <h3 className={"blog-title"}>{post.title}</h3>
                  <p className={"small"}>{post.description}</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
}
