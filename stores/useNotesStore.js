import { createCollectionStore } from './createCollectionStore'

const initialNotes = [
  { id: '1', title: 'Заметка 1', completed: false, todos: [] },
  { id: '2', title: 'Заметка 2', completed: false, todos: [] },
]

export const useNotesStore = createCollectionStore('notesStore', 'notesList', initialNotes)