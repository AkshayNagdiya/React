import { Navigate } from "react-router-dom";

const ProtectedRouting = ({ children, isLogin }) => {
  if (isLogin) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRouting;
