import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from '../components/Loader';
import { MainLayout } from '../loyauts/MainLoyaut';

// Sahifalarni lazy load qilish
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Articles = lazy(() => import('../pages/Articles/Articles'));
const News = lazy(() => import('../pages/News/News'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
