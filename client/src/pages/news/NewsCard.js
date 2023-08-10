import React from "react";

export default function NewsCard({ news }) {
  return (
    <>
      {news.map((story) => {
        return (
          <>
            <h2>{story.title}</h2>
            <p>{story.date}</p>
            {/* p tag for now, look into text area */}
            <p>{story.newsItem}</p>
            <p>___________________________________________</p>
          </>
        );
      })}
    </>
  );
}
