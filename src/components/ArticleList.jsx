// import React from "react";

import React from "react";
import Article from "./Article";
import { posts } from "../data/blog";

const ArticleList = (props) => {
  return (
    <main className="main" key={props.arti}>
      {posts.map((post) => (
        <Article
          title={post.title}
          date={post.date}
          preview={post.preview}
          posts={post}
          key={post.id}
        />
      ))}
    </main>
  );
};

Article.defaultProps = {
  date: "January 1, 1970",
};

export default ArticleList;
