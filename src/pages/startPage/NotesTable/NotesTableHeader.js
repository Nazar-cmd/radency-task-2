import { useDispatch } from "react-redux";
import { TableCell } from "components";
import { useCallback } from "react";
import { archiveAllNotes, deleteAllNotes } from "redux/actions/noteActions";

const NotesTableHeader = () => {
	const dispatch = useDispatch();

	const onArchiveAllClick = useCallback(
		() => dispatch(archiveAllNotes()),
		[dispatch]
	);

	const onDeleteAllClick = useCallback(
		() => dispatch(deleteAllNotes()),
		[dispatch]
	);

	return (
		<div className="table__header table__row">
			<TableCell>Name</TableCell>
			<TableCell>Created</TableCell>
			<TableCell>Category</TableCell>
			<TableCell>Content</TableCell>
			<TableCell>Dates</TableCell>
			<TableCell>
				<div className="table__cell_content table__header_content">
					<img
						src="/assets/icons/archive-solid.svg"
						className="icon table__header_icon icon_archive_all"
						alt="archive"
						onClick={onArchiveAllClick}
					/>
					<img
						src="/assets/icons/trash-solid.svg"
						className="icon table__header_icon icon_delete_all"
						alt="delete"
						onClick={onDeleteAllClick}
					/>
				</div>
			</TableCell>
		</div>
	);
};

export default NotesTableHeader;
