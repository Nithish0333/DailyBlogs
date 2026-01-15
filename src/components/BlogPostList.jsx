import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogPostList.css';

function BlogPostList() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h2>Latest Posts</h2>
        <p>Discover our latest articles and insights</p>
      </div>
      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-category">{post.category}</div>
            <Link to={`/post/${post.id}`} className="blog-card-link">
              <h3 className="blog-card-title">{post.title}</h3>
            </Link>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-card-meta">
              <span className="blog-card-author">{post.author}</span>
              <span className="blog-card-date">{formatDate(post.date)}</span>
              <span className="blog-card-read-time">{post.readTime}</span>
            </div>
            <Link to={`/post/${post.id}`} className="blog-card-read-more">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogPostList;
