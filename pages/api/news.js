import { news } from "../news/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(news);
  } else if (req.method === "POST") {
    const title = req.body.title;
    const url = req.body.url;
    const content = req.body.content;
    const newNews = {
      id: Date.now(),
      title,
      url,
      content,
    };
    news.push(newNews);
    res.status(201).json(newNews);
  } else if (req.method === "DELETE") {
    const deletedNews = news.find(
        news => news.title
      )
      const index = news.findIndex(
        news => news.title
      )
      news.splice(index, 1)
      res.status(200)
        .json(deletedNews)
    }
}