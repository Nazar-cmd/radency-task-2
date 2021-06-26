import { Table, NoTableDataMessage, Button } from "components";
import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import NotePopup from "pages/startPage/NotesTable/NotePopup/NotePopup";
import { useDispatch } from "react-redux";
import { createNote } from "redux/actions/noteActions";
import { usePopupOpen } from "hooks";
import NotesTableHeader from "./NotesTableHeader";
import NotesTableRow from "./NotesTableRow";

const NotesTable = ({ notes }) => {
	const { openPopup, closePopup, popupOpen } = usePopupOpen();
	const dispatch = useDispatch();

	const notesTableRows = useMemo(
		() =>
			notes.map(({ name, category, created, content, archived }, index) => (
				<NotesTableRow
					key={index}
					name={name}
					category={category}
					created={created}
					content={content}
					archived={archived}
					index={index}
				/>
			)),
		[notes]
	);

	const noDataMessage = !notes.length && <NoTableDataMessage />;

	const addNote = useCallback((note) => dispatch(createNote(note)), [dispatch]);

	return (
		<div className="notes_table">
			<Table>
				<NotesTableHeader />
				{noDataMessage}
				{notesTableRows}
			</Table>
			<Button text="Add note!" onClick={openPopup} />
			<NotePopup
				closePopup={closePopup}
				open={popupOpen}
				submitPopup={addNote}
			/>
		</div>
	);
};

NotesTable.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			created: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired
		})
	)
};

export default NotesTable;
