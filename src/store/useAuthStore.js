import { create } from "zustand";
import { notifySuccess } from "../utils/toast";
import useJournalStore from "./useJournalStore";

const useAuthStore = create((set) => ({
  userData: JSON.parse(localStorage.getItem("userData")) || null,

  setUserData: (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    set({ userData: data });
  },

  logout: () => {
    localStorage.removeItem("userData");
    set({ userData: null });

    useJournalStore.getState().clearJournal();

    notifySuccess("Logout successful");

    setTimeout(() => {
      window.location.reload();
    }, 500);
  },
}));

export default useAuthStore;
