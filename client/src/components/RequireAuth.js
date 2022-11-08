import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    auth?.user
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
}


      // USE THIS CODE FOR DIFFERENT ROLE PAGE AUTHENTICATION WRITE /unauthorized files and add roles to api
      // minute 20+ this video https://www.youtube.com/watch?v=oUZjO00NkhY&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=3
// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();
//
//   return (
//     auth?.roles?.find(role => allowedRoles?.includes(role))
//       ? <Outlet />
//       : auth?.user 
//           ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//           : <Navigate to="/login" state={{ from: location }} replace />
//   );
// }

export default RequireAuth;
