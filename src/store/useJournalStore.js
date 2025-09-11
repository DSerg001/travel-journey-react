import { create } from "zustand";
import { notifySuccess } from "../utils/toast";

const useJournalStore = create((set) => ({
  myJournal: JSON.parse(localStorage.getItem("myJournal")) || [],

  setJournal: (journals) => {
    localStorage.setItem("myJournal", JSON.stringify(journals));
    set({ myJournal: journals });
  },

  addJournal: (journal) =>
    set((state) => {
      const updated = [...state.myJournal, { ...journal, views: 0 }]; 
      localStorage.setItem("myJournal", JSON.stringify(updated));
      return { myJournal: updated };
    }),

  updateJournal: (updatedJournal) =>
    set((state) => {
      const updated = state.myJournal.map((j) =>
        j.id === updatedJournal.id ? updatedJournal : j
      );
      localStorage.setItem("myJournal", JSON.stringify(updated));
      return { myJournal: updated };
    }),

  removeJournal: (id) => {
    set((state) => {
      const updated = state.myJournal.filter((j) => j.id !== id);
      localStorage.setItem("myJournal", JSON.stringify(updated));
      return { myJournal: updated };
    });
    notifySuccess("Trip deleted successfully");
  },

  clearJournal: () => {
    localStorage.removeItem("myJournal");
    set({ myJournal: [] });
  },
}));

export default useJournalStore;
