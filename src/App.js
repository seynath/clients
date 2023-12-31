import './App.css';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<CreatePost />} />
        <Route path="edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;