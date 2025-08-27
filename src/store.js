// src/store.js
import { create } from "zustand";

const useStore = create((set) => ({
  userData: JSON.parse(localStorage.getItem("userData")) || null,
  journals: [],

  setUserData: (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    set({ userData: data });
  },

  logout: () => {
    localStorage.removeItem("userData");
    set({ userData: null });
  },

  setJournals: (journals) => set({ journals }),
}));

export default useStore;
