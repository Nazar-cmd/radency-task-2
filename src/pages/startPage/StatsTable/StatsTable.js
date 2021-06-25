import { Table } from "components";
import StatsTableRow from "./StatsTableRow";
import StatsTableHeader from "./StatsTableHeader";

const StatsTable = () => (
	<Table>
		<StatsTableHeader />
		<StatsTableRow
			category="Idea"
			archivedQuantity={456}
			activeQuantity={789}
		/>
	</Table>
);

export default StatsTable;
