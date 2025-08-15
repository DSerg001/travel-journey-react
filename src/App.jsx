import { Routes, Route, useNavigate } from "react-router-dom";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import { AuthContext } from "./context/authContext";
import { useState, useEffect } from "react";
import AddTripPage from "./pages/AddTrip";
import MyJournalPage from "./pages/MyJournal";

function App() {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : null;
  });
  const [myJournal, setJournal] = useState([
    {
      title: "Mi ban",
      location: "location",
      date: "date",
      description: "description",
      imageFile: null,
      imagePreview: "",
    },
  ]);
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
    <AuthContext.Provider value={{ userData, setUserData, logout, setJournal, myJournal }}>
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
