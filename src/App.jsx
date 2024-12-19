import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import MainLayout from './layouts/MainLayout';
const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
