import { createListStore } from './createListStore'

const initialNotes = [
  { id: '1', title: 'Заметка 1', completed: false },
  { id: '2', title: 'Заметка 2', completed: false },
  { id: '3', title: 'Заметка 3', completed: false }
]

export const useNotesStore = createListStore('notesStore', 'notesList', initialNotes)