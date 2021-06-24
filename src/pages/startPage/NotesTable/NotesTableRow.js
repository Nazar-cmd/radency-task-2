import PropTypes from "prop-types";
import { getAllDatesFromContent, getCategoryIconPath } from "utils";
import { TableCell } from "components";

const NotesTableRow = (props) => {
	const { name, category, created, content, archived } = props;

	const categoryIconPath = getCategoryIconPath(category);

	const archivedClassName = archived ? "archived" : "";

	const dates = getAllDatesFromContent(content);

	return (
		<div className={`table__row_content table__row ${archivedClassName}`}>
			<TableCell>
				<div className="table__cell_content table__cell_name">
					<img
						src={categoryIconPath}
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
						src="assets/icons/pen-solid.svg"
						className="icon table__row_icon icon_archive"
						alt="edit"
					/>
					<img
						src="assets/icons/archive-solid.svg"
						className="icon table__row_icon icon_archive"
						alt="archive"
					/>
					<img
						src="assets/icons/trash-solid.svg"
						className="icon table__row_icon icon_delete"
						alt="delete"
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
	archived: PropTypes.bool.isRequired
};

export default NotesTableRow;
