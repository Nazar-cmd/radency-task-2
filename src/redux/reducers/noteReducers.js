import {
	ARCHIVE_ALL_NOTES,
	DELETE_ALL_NOTES,
	DELETE_NOTE,
	CREATE_NOTE,
	UPDATE_NOTE,
	ARCHIVE_NOTE
} from "../actions/types";

const initialState = {
	notes: []
};

function noteReducers(state = initialState, action) {
	switch (action.type) {
		case CREATE_NOTE: {
			const newNotes = [...state.notes];
			const newNote = action.payload.note;

			newNotes.push(newNote);

			return {
				...state,
				notes: newNotes
			};
		}
		case DELETE_NOTE: {
			const newNotes = [...state.notes];
			newNotes.splice(action.payload.index, 1);

			return {
				...state,
				notes: newNotes
			};
		}
		case UPDATE_NOTE: {
			const { index, note } = action.payload;
			const newNotes = [...state.notes];
			const newNotesEl = newNotes[index];

			newNotes[index] = {
				...newNotesEl,
				...note
			};

			return {
				...state,
				notes: newNotes
			};
		}
		case ARCHIVE_NOTE: {
			const newNotes = [...state.notes];
			const isArchived = newNotes[action.payload.index].archived;
			newNotes[action.payload.index].archived = !isArchived;

			return {
				...state,
				notes: newNotes
			};
		}
		case DELETE_ALL_NOTES:
			return {
				...state,
				notes: []
			};
		case ARCHIVE_ALL_NOTES: {
			const newNotes = state.notes.map((note) => ({ ...note, archived: true }));

			return {
				...state,
				notes: newNotes
			};
		}
		default:
			return state;
	}
}

export default noteReducers;
