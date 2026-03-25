import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Bouquets } from './pages/Bouquets';
import { Blogs } from './pages/Blogs';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <Toaster position="top-center" richColors />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bouquets" element={<Bouquets />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
