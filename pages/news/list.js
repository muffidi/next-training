import { useState } from "react";

function NewsPage() {
  const [title, setTitle] = useState([]);
  const [url, setUrl] = useState([]);
  const [content, setContent] = useState([]);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();
    console.log(data);
    setNews(data);
  };

  const deleteNews = async (title) => {
      const response = await fetch(`/api/news/${title}`, {
          method: "DELETE",
      })
      const data = await response.json()
      console.log(data)
  }

  const submitNews = async () => {
    const response = await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        title,
        url,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div align="center">
        {"Title: "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {"Url: "}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        {"Content: "}
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button onClick={submitNews}>Submit news</button>
      </div>{" "}
      <br />
      <br /> <br />
      <div align="center">
        <button onClick={fetchNews}>Get the latest news in town</button>
      </div>{" "}
      {news.map((news) => {
        return (
          <div align="center" key={news.id}>
            {news.id}.<br />
            {"Title: "}
            {news.title}.<br />
            {"Url: "} {news.url}.<br />
            {"Content: "}
            {news.content} <br />
            <button onClick={() => deleteNews(news.title)}>Delete</button>
            <hr />
          </div>
        );
      })}{" "}
    </>
  );
}

export default NewsPage;