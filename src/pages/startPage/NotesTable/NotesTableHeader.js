import { TableCell } from "components";

const NotesTableHeader = () => (
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
				/>
				<img
					src="/assets/icons/trash-solid.svg"
					className="icon table__header_icon icon_delete_all"
					alt="delete"
				/>
			</div>
		</TableCell>
	</div>
);

export default NotesTableHeader;
