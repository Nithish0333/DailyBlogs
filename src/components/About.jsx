import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <header className="about-header">
          <h1>About Daily Blog</h1>
          <p className="about-subtitle">A modern, user-friendly blogging platform built with React</p>
        </header>

        <section className="about-section">
          <div className="about-card">
            <h2>What is Daily Blog?</h2>
            <p>
              Daily Blog is a modern, responsive blogging platform that allows users to discover 
              engaging articles on web development, programming, and technology. Built with the 
              latest web technologies, it provides a seamless experience for both reading and 
              creating blog posts.
            </p>
          </div>

          <div className="about-card">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>
                <strong>Browse Articles:</strong> Explore a curated collection of blog posts 
                covering topics like React, JavaScript, CSS, TypeScript, web design, and more.
              </li>
              <li>
                <strong>Create Your Own Posts:</strong> Share your knowledge and experiences by 
                creating and publishing your own blog posts with our intuitive creation form.
              </li>
              <li>
                <strong>Beautiful Design:</strong> Enjoy a modern, gradient-themed interface with 
                smooth animations and a responsive layout that works on all devices.
              </li>
              <li>
                <strong>Category Organization:</strong> Posts are organized by categories, making 
                it easy to find content that interests you.
              </li>
              <li>
                <strong>Local Storage:</strong> Your created posts are saved locally in your 
                browser, ensuring your content persists across sessions.
              </li>
            </ul>
          </div>

          <div className="about-card">
            <h2>Technology Stack</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h3>Frontend Framework</h3>
                <p>React 19.2.0 - Latest version with hooks and modern React patterns</p>
              </div>
              <div className="tech-item">
                <h3>Build Tool</h3>
                <p>Vite 7.2.4 - Lightning-fast development and build experience</p>
              </div>
              <div className="tech-item">
                <h3>Routing</h3>
                <p>React Router DOM 7.12.0 - Client-side routing for seamless navigation</p>
              </div>
              <div className="tech-item">
                <h3>Styling</h3>
                <p>Custom CSS with modern features like Grid, Flexbox, and CSS gradients</p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h2>Project Structure</h2>
            <p>
              Daily Blog is organized with a component-based architecture, making it easy to 
              maintain and extend. The application includes:
            </p>
            <ul className="structure-list">
              <li><strong>BlogPostList:</strong> Displays all available blog posts in an attractive grid layout</li>
              <li><strong>BlogPost:</strong> Shows individual blog post details with full content</li>
              <li><strong>CreatePost:</strong> Form component for users to create and publish new blog posts</li>
              <li><strong>Header:</strong> Navigation component with links to all major sections</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>How to Use</h2>
            <ol className="usage-list">
              <li>
                <strong>Browse Posts:</strong> Start from the home page to see all available blog posts. 
                Click on any post to read the full article.
              </li>
              <li>
                <strong>Create a Post:</strong> Click "Create Post" in the navigation bar to open the 
                post creation form. Fill in the title, author name, category, excerpt, and content, 
                then click "Publish Post".
              </li>
              <li>
                <strong>View Your Posts:</strong> Your newly created posts will appear on the home page 
                and can be viewed just like any other blog post.
              </li>
            </ol>
          </div>

          <div className="about-card highlight-card">
            <h2>Get Started</h2>
            <p>
              Ready to explore or share your knowledge? Visit the home page to browse articles 
              or create your first blog post today!
            </p>
            <div className="cta-buttons">
              <Link to="/" className="cta-button primary">Browse Posts</Link>
              <Link to="/create" className="cta-button secondary">Create Post</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;