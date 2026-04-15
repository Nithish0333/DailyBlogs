const db = require("../config/db");

const Post = {
  create: (title, content, userId, callback) => {
    const sql = "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)";
    db.query(sql, [title, content, userId], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM posts ORDER BY created_at DESC";
    db.query(sql, callback);
  },

  delete: (id, callback) => {
    const sql = "DELETE FROM posts WHERE id = ?";
    db.query(sql, [id], callback);
  }
};

module.exports = Post;
