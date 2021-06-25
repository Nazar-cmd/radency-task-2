import {
	CREATE_NOTE,
	UPDATE_NOTE,
	DELETE_NOTE,
	ARCHIVE_NOTE,
	DELETE_ALL_NOTES,
	ARCHIVE_ALL_NOTES
} from "./types";

/* function getCurrentDate() {
	const today = new Date();
	const day = String(today.getDate()).padStart(2, "0");
	const month = today.toLocaleString("default", { month: "long" });
	const year = today.getFullYear();

	return `${month} ${day}, ${year}`;
}
newNote.created = getCurrentDate();
newNote.archived = false; */

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
