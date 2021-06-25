import { Table, NoTableDataMessage, Button } from "components";
import { useMemo } from "react";
import PropTypes from "prop-types";
import NotesTableHeader from "./NotesTableHeader";
import NotesTableRow from "./NotesTableRow";

const NotesTable = ({ notes }) => {
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

	return (
		<div className="notes_table">
			<Table>
				<NotesTableHeader />
				{noDataMessage}
				{notesTableRows}
			</Table>
			<Button text="Add note!" />
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
