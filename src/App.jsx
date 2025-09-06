import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const Explore = lazy(() => import("./pages/Explore/index.jsx"));
const Login = lazy(() => import("./pages/Login/index.jsx"));
const AddTripPage = lazy(() => import("./pages/AddTrip/index.jsx"));
const MyJournalPage = lazy(() => import("./pages/MyJournal/index.jsx"));
const PostPage = lazy(() => import("./pages/Post/index.jsx"));

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/explore", element: <Explore /> },
    { path: "/login", element: <Login /> },
    {
      path: "/add-trip",
      element: (
        <ProtectedRoute>
          <AddTripPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/my-journal",
      element: (
        <ProtectedRoute>
          <MyJournalPage />
        </ProtectedRoute>
      ),
    },
    { path: "/post/:source/:id", element: <PostPage /> },
  ]);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Բեռնում...</div>}>
        <RouterProvider router={router} />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
        limit={3}
      />
    </>
  );
}

export default App;
