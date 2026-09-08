import AppRoutes from './routes/AppRoutes';
import PreLoadGate from './components/preload/PreLoadGate';
import ScrollToTop from './components/routing/ScrollToTop';

export default function App() {
  return (
    <PreLoadGate>
      <ScrollToTop />
      <AppRoutes />
    </PreLoadGate>
  );
}
