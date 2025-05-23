import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { BlogsProvider } from './context/blogsConntext.jsx';

createRoot(document.getElementById('root')).render(
  <BlogsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BlogsProvider>

)
