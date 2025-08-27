import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { useState, useEffect, Suspense, lazy } from "react";
import Header from "./components/Header";

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

  const [myJournal, setJournal] = useState(() => {
    const saved = localStorage.getItem("myJournal");
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

    useEffect(() => {
      if (myJournal) {
        localStorage.setItem("myJournal", JSON.stringify(myJournal));
      } else {
        localStorage.removeItem("myJournal");
      }
    }, [myJournal]);

  const logout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, logout, myJournal, setJournal }}
    >
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
