import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Clinicians from './pages/Clinicians';
import Company from './pages/Company';
import Blog from './pages/Blog';
import Demo from './pages/Demo';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/clinicians" element={<Clinicians />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/demo" element={<Demo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
