import React, { useState, useEffect } from "react";

function Nav() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("path/to/api")
      .then((response) => response.json())
      .then((data) => {
        // set feeds state to last 5 items
        setFeeds(data.slice(0, 5));
      });
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      <div>
        {feeds.map((feed) => (
          <div key={feed.id}>
            <p>{feed.text}</p>
            <a href={feed.link}>{feed.source}</a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
