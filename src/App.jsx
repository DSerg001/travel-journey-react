import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { AuthContext } from "./context/authContext.js";
import useJournalStore from "./store.js";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const Explore = lazy(() => import("./pages/Explore/index.jsx"));
const Login = lazy(() => import("./pages/Login/index.jsx"));
const AddTripPage = lazy(() => import("./pages/AddTrip/index.jsx"));
const MyJournalPage = lazy(() => import("./pages/MyJournal/index.jsx"));

function App() {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : null;
  });

  const myJournal = useJournalStore((state) => state.journals);

  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  const logout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout, myJournal }}>
      <Header />
      <Suspense fallback={<div>Բեռնում...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-trip" element={<AddTripPage />} />
          <Route path="/my-journal" element={<MyJournalPage />} />
        </Routes>
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
