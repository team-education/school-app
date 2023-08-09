import React, { useState, useEffect } from "react";
import NewsForm from "./Form";
import NewsCard from "./NewsCard";
import axios from "axios";
import "./News.css";

export default function News() {
  // state variable
  // and the function that updates it.
  // inside the useStaet ()'s we set the inital state of the state variable.
  // always the state variable first, and then the function to update it.
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    const result = await axios.get("http://localhost:8086/news");
    console.log(result.data);
    setNews(result.data);
  }

  // some sort of function that handles creating a news article

  async function addNewsArticle(formData) {
    const result = await axios.post("http://localhost:8086/news", formData);
    setNews([...news, result.data]);
  }

  // delete articles
  const handleDeleteArticle = async (id) => {
    const result = await axios.delete(`http://localhost:8086/news/${id}`);
    getNews();
  };

  //update articles
  const handleUpdateArticle = async (article) => {
    await axios.put(`http://localhost:8086/news/${article._id}`, article);
    getNews();
  };

  return (
    <>
      <div className="News">
        <h2>School News</h2>
        <div>
          <NewsForm onSubmitFunc={console.log("")} />
        </div>
        <div>
          <NewsCard news={news}></NewsCard>
        </div>
      </div>
    </>
  );
}
