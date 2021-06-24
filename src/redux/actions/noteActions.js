import {
	CREATE_NOTE,
	UPDATE_NOTE,
	DELETE_NOTE,
	ARCHIVE_NOTE,
	DELETE_ALL_NOTES,
	ARCHIVE_ALL_NOTES
} from "./types";

const createNote = (note) => (dispatch) => {
	dispatch({
		type: CREATE_NOTE,
		payload: { note }
	});
};

const updateNote = (note, id) => (dispatch) => {
	dispatch({
		type: UPDATE_NOTE,
		payload: { note, id }
	});
};

const deleteNote = (note, id) => (dispatch) => {
	dispatch({
		type: DELETE_NOTE,
		payload: { note, id }
	});
};

const archiveNote = (note, id) => (dispatch) => {
	dispatch({
		type: ARCHIVE_NOTE,
		payload: { note, id }
	});
};

const deleteAllNotes = () => (dispatch) => {
	dispatch({
		type: DELETE_ALL_NOTES,
		payload: {}
	});
};

const archiveAllNotes = () => (dispatch) => {
	dispatch({
		type: ARCHIVE_ALL_NOTES,
		payload: {}
	});
};

export {
	createNote,
	updateNote,
	deleteNote,
	archiveNote,
	deleteAllNotes,
	archiveAllNotes
};
