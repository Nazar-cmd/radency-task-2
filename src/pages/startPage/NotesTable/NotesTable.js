import { Table } from "components";
import NotesTableHeader from "./NotesTableHeader";
import NotesTableRow from "./NotesTableRow";

const NotesTable = () => (
	// console.log("123");

	<Table>
		<NotesTableHeader />
		<NotesTableRow
			name="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, earum!"
			category="Idea"
			created="123"
			content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, earum!"
			archived={false}
		/>
	</Table>
);
export default NotesTable;
