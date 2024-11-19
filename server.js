import express from "express";
import "dotenv/config";

const posts = [
  {
    id: 1,
    description: "Um lindo pôr do sol na praia",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    description: "Uma floresta bela",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    description: "Meu gato fazendo cara de bobo",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    description: "Uma receita deliciosa de bolo de chocolate",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 5,
    description: "Paisagem montanhosa com um lago cristalino",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 6,
    description: "Um grupo de amigos se divertindo",
    image: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(process.env.API_PORT, () => {
  console.log(`Server running on port: ${process.env.API_PORT}`);
});

function findPostById(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
  const index = findPostById(req.params.id);
  res.status(200).json(posts[index]);
});
