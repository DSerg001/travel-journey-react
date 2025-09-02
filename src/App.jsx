import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const Explore = lazy(() => import("./pages/Explore/index.jsx"));
const Login = lazy(() => import("./pages/Login/index.jsx"));
const AddTripPage = lazy(() => import("./pages/AddTrip/index.jsx"));
const MyJournalPage = lazy(() => import("./pages/MyJournal/index.jsx"));

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/explore", element: <Explore /> },
    { path: "/login", element: <Login /> },
    { path: "/add-trip", element: <AddTripPage /> },
    { path: "/my-journal", element: <MyJournalPage /> },
  ]);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Բեռնում...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
