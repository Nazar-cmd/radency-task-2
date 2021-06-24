import { useSelector } from "react-redux";

import { Table } from "components";
import NotesTableHeader from "./NotesTableHeader";
import NotesTableRow from "./NotesTableRow";

const NotesTable = () => {
	const { notes } = useSelector((state) => state.notes);

	return (
		<Table>
			<NotesTableHeader />
			{notes.map(({ name, category, created, content, archived }, index) => (
				<NotesTableRow
					key={index}
					name={name}
					category={category}
					created={created}
					content={content}
					archived={archived}
					index={index}
				/>
			))}
		</Table>
	);
};
export default NotesTable;
