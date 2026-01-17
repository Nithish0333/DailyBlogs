import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'General',
    excerpt: '',
    content: ''
  });

  const categories = ['General', 'React', 'CSS', 'JavaScript', 'Web Design', 'TypeScript', 'Performance', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title || !formData.author || !formData.excerpt || !formData.content) {
      alert('Please fill in all required fields.');
      return;
    }

    // Get existing posts from localStorage
    const existingPosts = JSON.parse(localStorage.getItem('userPosts') || '[]');
    
    // Start user post IDs from 1000 to avoid conflicts with static posts (1-6)
    const newId = existingPosts.length > 0 
      ? Math.max(...existingPosts.map(p => p.id)) + 1
      : 1000;

    // Create new post object
    const newPost = {
      id: newId,
      title: formData.title,
      author: formData.author,
      category: formData.category,
      excerpt: formData.excerpt,
      content: formData.content.replace(/\n/g, '<br>'), // Convert line breaks to HTML
      date: new Date().toISOString().split('T')[0],
      readTime: calculateReadTime(formData.content)
    };

    // Add new post to localStorage
    existingPosts.push(newPost);
    localStorage.setItem('userPosts', JSON.stringify(existingPosts));

    // Reset form
    setFormData({
      title: '',
      author: '',
      category: 'General',
      excerpt: '',
      content: ''
    });

    // Navigate to the new post
    navigate(`/post/${newId}`);
  };

  return (
    <div className="create-post-container">
      <div className="create-post-wrapper">
        <h2 className="create-post-title">Create New Post</h2>
        <form onSubmit={handleSubmit} className="create-post-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter post title"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author">Author *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Excerpt *</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Brief summary of your post"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog post content here..."
              rows="15"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate('/')} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;