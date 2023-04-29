import React, { useState, useEffect } from "react";
let parsedData;
// code to assign value to parsedData
console.log(parsedData); // parsedData is now defined and can be used


function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("path/to/xml")
      .then((response) => response.text())
      .then((data) => {
        // parse XML data and set posts state
        setPosts(parsedData);
      });
  }, []);

  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <a href={post.link}>Read More</a>
        </article>
      ))}
    </main>
  );
}

export default Main;
