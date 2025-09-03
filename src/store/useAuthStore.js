import { create } from "zustand";

const useAuthStore = create((set) => ({
  userData: JSON.parse(localStorage.getItem("userData")) || null,

  setUserData: (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    set({ userData: data });
  },

  logout: () => {
    localStorage.removeItem("userData");
    set({ userData: null });
    window.location.reload()
  },
}));

export default useAuthStore;
