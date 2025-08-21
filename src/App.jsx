import { Routes, Route, useNavigate } from "react-router-dom";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import { AuthContext } from "./context/authContext.js";
import { useState, useEffect } from "react";
import AddTripPage from "./pages/AddTrip";
import MyJournalPage from "./pages/MyJournal";

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
      console.log(myJournal)
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
      value={{ userData, setUserData, logout, setJournal, myJournal }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-trip" element={<AddTripPage />} />
        <Route path="/my-journal" element={<MyJournalPage />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
