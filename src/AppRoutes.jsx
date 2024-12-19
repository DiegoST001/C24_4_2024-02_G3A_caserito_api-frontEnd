// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import PanelUser from './pages/PanelUser';
import PanelEmpresa from './pages/PanelEmpresa';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import UpdateEmpresa from './pages/UpdateEmpresa';
import UpdateUser from './pages/UpdateCliente';
import Detalle from './pages/detalles';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/logout" element={<Logout />} />
    <Route
      path="/home"
      element={
        <ProtectedRoute allowedRoles={['USER', 'EMPRESA']}>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/PanelUser"
      element={
        <ProtectedRoute allowedRoles={['USER', "EMPRESA"]}>
          <MainLayout>
            <PanelUser />
          </MainLayout>
        </ProtectedRoute>
      }
    />
    {/* <Route
      path="/PanelEmpresa"
      element={
        <ProtectedRoute allowedRoles={['EMPRESA']}>
          <MainLayout>
            <PanelEmpresa />
          </MainLayout>
        </ProtectedRoute>
      }
    /> */}
    <Route
    path="/updateDate"
    element={
      <ProtectedRoute allowedRoles={['USER', "EMPRESA"]}>
        <MainLayout>
          <UpdateUser />
        </MainLayout>
      </ProtectedRoute>
    }
    />

    <Route
      path="/detalleRestaurante/:nombre"
      element={
        <ProtectedRoute allowedRoles={['USER', 'EMPRESA']}>
          <MainLayout>
            <Detalle />
          </MainLayout>
        </ProtectedRoute>
      }
    />


    {/* <Route
    path="/updateDate"
    element={
      <ProtectedRoute allowedRoles={['EMPRESA']}>
        <MainLayout>
          <UpdateEmpresa />
        </MainLayout>
      </ProtectedRoute>
    }
    /> */}

    <Route path="/logout" element={<Logout />} />
  </Routes>
);

export default AppRoutes;
