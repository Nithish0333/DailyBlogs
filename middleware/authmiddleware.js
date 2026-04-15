const db = require("../config/db");

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  const sql = "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)";

  db.query(sql, [title, content, userId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Post created" });
  });
};

exports.getPosts = (req, res) => {
  const sql = "SELECT * FROM posts";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
};

exports.deletePost = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM posts WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Post deleted" });
  });
};
