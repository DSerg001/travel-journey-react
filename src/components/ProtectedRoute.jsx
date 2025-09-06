import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const userData = useAuthStore((state) => state.userData);

  if (!userData) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
