import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BlogPostList />} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
