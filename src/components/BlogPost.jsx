import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="not-found">
          <h2>Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <Link to="/" className="back-link">← Back to All Posts</Link>
        
        <div className="post-category">{post.category}</div>
        
        <h1 className="post-title">{post.title}</h1>
        
        <div className="post-meta">
          <span className="post-author">By {post.author}</span>
          <span className="post-date">{formatDate(post.date)}</span>
          <span className="post-read-time">{post.readTime}</span>
        </div>
        
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="post-footer">
          <Link to="/" className="back-link">← Back to All Posts</Link>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
