import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ProductPage from '../pages/Product/ProductPage';
import PricingPage from '../pages/Pricing/PricingPage';
import AboutPage from '../pages/About/AboutPage';
import SupportPage from '../pages/Support/SupportPage';
import PageLayout from '../components/layout/PageLayout';
import Container from '../components/ui/Container';

function NotFoundPage() {
  return (
    <PageLayout>
      <section className="page-hero">
        <Container>
          <h1>Page not found</h1>
          <p className="text-muted">The page you requested does not exist.</p>
        </Container>
      </section>
    </PageLayout>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/contact" element={<Navigate to="/support" replace />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
