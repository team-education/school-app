import React, { useState } from "react";

export default function NewsForm({ onSubmitFunc, news }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    newsItem: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const submit = (event) => {
    event.preventDefault();
    // whatever was passed as the prop
    onSubmitFunc(formData);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        value={formData.title}
        placeholder="News title"
      />
      <input
        type="text"
        onChange={handleChange}
        name="date"
        value={formData.date}
        placeholder="Date of news"
      />
      <textarea
        type="textarea"
        onChange={handleChange}
        name="newsItem"
        placeholder="News article"
        rows="4"
      ></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
}
