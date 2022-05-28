import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { getPlayerItem } from './utils';

function ProtectedRoute() {
  const location = useLocation();

  const player = getPlayerItem();

  if (player) return <Outlet />;

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default ProtectedRoute;
