import TablesWithNotes from "pages/startPage/TablesWithNotes";
import NotesTable from "./NotesTable";
import StatsTable from "./StatsTable";

const StartPage = () => (
	<div className="start_page">
		<TablesWithNotes>
			<NotesTable />
			<StatsTable />
		</TablesWithNotes>
	</div>
);

export default StartPage;
