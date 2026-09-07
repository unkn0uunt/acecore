import AppRoutes from './routes/AppRoutes';
import PreLoadGate from './components/preload/PreLoadGate';

export default function App() {
  return (
    <PreLoadGate>
      <AppRoutes />
    </PreLoadGate>
  );
}
