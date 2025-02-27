import { createCollectionStore } from "./createCollectionStore";

const initialNotes = [];

export const useNotesStore = createCollectionStore(
  "notesStore",
  "notesList",
  initialNotes
);
