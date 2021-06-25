import { useSelector } from "react-redux";

import { Table } from "components";
import { useMemo } from "react";
import NotesTableHeader from "./NotesTableHeader";
import NotesTableRow from "./NotesTableRow";

const NotesTable = () => {
	const { notes } = useSelector((state) => state.notes);

	const tableRows = useMemo(
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

	return (
		<Table>
			<NotesTableHeader />
			{tableRows}
		</Table>
	);
};
export default NotesTable;
