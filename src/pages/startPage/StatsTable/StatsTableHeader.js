import { TableCell } from "components";

const StatsTableHeader = () => (
	<div className="table__header table__row" id="cols">
		<TableCell>Note Category</TableCell>
		<TableCell>Active</TableCell>
		<TableCell>Archived</TableCell>
	</div>
);

export default StatsTableHeader;
