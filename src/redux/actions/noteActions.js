import {
	CREATE_NOTE,
	UPDATE_NOTE,
	DELETE_NOTE,
	ARCHIVE_NOTE,
	DELETE_ALL_NOTES,
	ARCHIVE_ALL_NOTES
} from "./types";

const createNote = (note) => ({
	type: CREATE_NOTE,
	payload: { note }
});

const updateNote = (note, index) => ({
	type: UPDATE_NOTE,
	payload: { note, index }
});

const deleteNote = (index) => ({
	type: DELETE_NOTE,
	payload: { index }
});

const archiveNote = (index) => ({
	type: ARCHIVE_NOTE,
	payload: { index }
});

const deleteAllNotes = () => ({
	type: DELETE_ALL_NOTES,
	payload: {}
});

const archiveAllNotes = () => ({
	type: ARCHIVE_ALL_NOTES,
	payload: {}
});

export {
	createNote,
	updateNote,
	deleteNote,
	archiveNote,
	deleteAllNotes,
	archiveAllNotes
};
