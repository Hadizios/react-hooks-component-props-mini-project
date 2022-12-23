import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside className="aside">
      <p>{about}</p>
      <img src={image} className="aside" alt="blog logo" />
    </aside>
  );
}

About.defaultProps = {
  image: "https://via.placeholder.com/215",
};
export default About;
