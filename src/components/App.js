import { Routes ,Route } from 'react-router-dom';
import { Navbar, Home, PostDetail, CreatePost } from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' component={<Home/>} />
        <Route path='/post/:postId' component={<PostDetail/>} />
        <Route path='/create-post' component={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
