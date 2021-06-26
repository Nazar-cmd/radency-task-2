import PropTypes from "prop-types";
import { getAllDatesFromContent, getCategoryIconName } from "utils";
import { TableCell } from "components";
import { useCallback } from "react";
import { archiveNote, updateNote, deleteNote } from "redux/actions/noteActions";
import { useDispatch } from "react-redux";
import NotePopup from "pages/startPage/NotesTable/NotePopup/NotePopup";
import { usePopupOpen } from "hooks";

const NotesTableRow = (props) => {
	const { openPopup, closePopup, popupOpen } = usePopupOpen();

	const { name, category, created, content, archived, index } = props;

	const dates = getAllDatesFromContent(content);

	const categoryIconName = getCategoryIconName(category);

	const archivedClassName = archived ? "archived" : "";

	const dispatch = useDispatch();

	const addNote = useCallback(
		(note) => dispatch(updateNote(note, index)),
		[dispatch, index]
	);

	const onArchiveClick = useCallback(
		() => dispatch(archiveNote(index)),
		[dispatch, index]
	);

	const onDeleteClick = useCallback(
		() => dispatch(deleteNote(index)),
		[dispatch, index]
	);

	const popupInitialValue = {
		name,
		category,
		content
	};

	return (
		<div className={`table__row_content table__row ${archivedClassName}`}>
			<NotePopup
				closePopup={closePopup}
				open={popupOpen}
				submitPopup={addNote}
				initialValue={popupInitialValue}
			/>
			<TableCell>
				<div className="table__cell_content table__cell_name">
					<img
						src={require(`../../../icons/${categoryIconName}`).default}
						className="icon table__row_icon"
						alt="category_icon"
					/>
					<p className="table__cell_text" title={name}>
						{name}
					</p>
				</div>
			</TableCell>
			<TableCell>
				<p className="table__cell_text" title={created}>
					{created}
				</p>
			</TableCell>
			<TableCell>
				<p className="table__cell_text">{category}</p>
			</TableCell>
			<TableCell>
				<p className="table__cell_text" title={content}>
					{content}
				</p>
			</TableCell>
			<TableCell>
				<p className="table__cell_text" title={dates}>
					{dates}
				</p>
			</TableCell>
			<TableCell>
				<div className="table__cell_content table__header_content">
					<img
						src={require("../../../icons/pen-solid.svg").default}
						className="icon table__row_icon icon_archive"
						alt="edit"
						onClick={openPopup}
					/>
					<img
						src={require("../../../icons/archive-solid.svg").default}
						className="icon table__row_icon icon_archive"
						alt="archive"
						onClick={onArchiveClick}
					/>
					<img
						src={require("../../../icons/trash-solid.svg").default}
						className="icon table__row_icon icon_delete"
						alt="delete"
						onClick={onDeleteClick}
					/>
				</div>
			</TableCell>
		</div>
	);
};

NotesTableRow.propTypes = {
	name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	created: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	index: PropTypes.number.isRequired
};

export default NotesTableRow;
