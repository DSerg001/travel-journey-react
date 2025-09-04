import { create } from "zustand";

const useJournalStore = create((set) => ({
  myJournal: JSON.parse(localStorage.getItem("myJournal")) || [],

  setJournal: (journals) => {
    localStorage.setItem("myJournal", JSON.stringify(journals));
    set({ myJournal: journals });
  },

  addJournal: (journal) =>
    set((state) => {
      const updated = [...state.myJournal, journal];
      localStorage.setItem("myJournal", JSON.stringify(updated));
      return { myJournal: updated };
    }),

  removeJournal: (id) =>
    set((state) => {
      const updated = state.myJournal.filter((j) => j.id !== id);
      localStorage.setItem("myJournal", JSON.stringify(updated));
      return { myJournal: updated };
    }),

  clearJournal: () => {
    localStorage.removeItem("myJournal");
    set({ myJournal: [] });
  },
}));

export default useJournalStore;
