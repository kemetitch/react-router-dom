import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactPage from "../Pages/Contact";
import AboutPage from "../Pages/About";
import HomePage from "../Pages";
import RootLayout from "../Pages/Layout";
import LearnLayout from "../learn/Layout";
import QuickStart from "../learn";
import ThinkInReact from "../learn/ThinkInReact";
import Installation from "../learn/Installation";
import Login from "../Pages/Login";
import Contribute from "../Pages/contribute";
import ProtectedRoute from "../component/auth/ProtectedRoute";
import ErrorComponent from "../component/Error/ErrorComponent";
import PageNotFound from "../Pages/PageNotFound";
let isLoggedIn = true;
const userdata: { email: string } = isLoggedIn
  ? { email: "kareem@123" }
  : { email: "keko" };
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<ErrorComponent />}
      >
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              data={userdata} //send data to component which redirect for (contribute)
              redirectPath="/contribute"
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="contribute"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
              <Contribute />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStart />} />
        <Route path="think-in-react" element={<ThinkInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
