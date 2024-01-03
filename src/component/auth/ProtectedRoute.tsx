import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Iprops {
  children: ReactNode;
  redirectPath: string;
  isAllowed: boolean;
  data?: unknown;
}
const ProtectedRoute = ({
  isAllowed,
  redirectPath,
  children,
  data,
}: Iprops) => {
  if (isAllowed) {
    return children;
  }
  return <Navigate to={redirectPath} replace state={data} />;
};

export default ProtectedRoute;
