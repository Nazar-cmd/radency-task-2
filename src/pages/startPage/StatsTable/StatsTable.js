import { Table } from "components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import StatsTableRow from "./StatsTableRow";
import StatsTableHeader from "./StatsTableHeader";

const StatsTable = ({ notes }) => {
	const categories = [...new Set(notes.map((note) => note.category).sort())];

	const statsTableData = categories.map((categoryName) => {
		const activeQuantity = notes.filter(
			(note) => note.category === categoryName && !note.archived
		).length;
		const archivedQuantity = notes.filter(
			(note) => note.category === categoryName && note.archived
		).length;

		return {
			name: categoryName,
			archivedQuantity,
			activeQuantity
		};
	});

	const statsTableRows = useMemo(
		() =>
			statsTableData.map(
				({ name, activeQuantity, archivedQuantity }, index) => (
					<StatsTableRow
						key={index}
						category={name}
						archivedQuantity={archivedQuantity}
						activeQuantity={activeQuantity}
					/>
				)
			),
		[statsTableData]
	);

	return (
		<Table>
			<StatsTableHeader />
			{statsTableRows}
		</Table>
	);
};

StatsTable.propTypes = {
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

export default StatsTable;
