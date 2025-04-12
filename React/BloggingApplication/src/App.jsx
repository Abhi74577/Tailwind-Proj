import './App.css'
import BlogCreate from './components/BlogsPage/BlogCreate';
import BlogView from './components/BlogsPage/BlogView';
import Home from './components/Home/Home';
import SingleBlog from './components/SingleBlogView/SingleBlog';
import Header from './layout/Header'
import { Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<BlogView />} />
      </Routes>
      <Routes>
        <Route path="sigleBolg/:id" element={<SingleBlog />} />
      </Routes>
      {/* <Routes>
        <Route path="/newblog" element={<BlogCreate />} />
      </Routes> */}
      
    </>
  )
}

export default App
