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

const updateNote = (note, id) => ({
	type: UPDATE_NOTE,
	payload: { note, id }
});

const deleteNote = (id) => ({
	type: DELETE_NOTE,
	payload: { id }
});

const archiveNote = (note, id) => ({
	type: ARCHIVE_NOTE,
	payload: { note, id }
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
