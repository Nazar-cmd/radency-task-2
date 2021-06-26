import PropTypes from "prop-types";
import { getCategoryIconName } from "utils";

const StatsTableRow = ({ category, activeQuantity, archivedQuantity }) => {
	const categoryIconName = getCategoryIconName(category);

	return (
		<div className="table__row_content table__row">
			<div className="table__cell">
				<div className="table__cell_content table__cell_name">
					<img
						src={require(`../../../icons/${categoryIconName}`).default}
						className="icon table__row_icon"
						alt="idea"
					/>
					<p className="table__cell_text">{category}</p>
				</div>
			</div>
			<div className="table__cell">
				<p className="table__cell_text">{activeQuantity}</p>
			</div>
			<div className="table__cell">
				<p className="table__cell_text">{archivedQuantity}</p>
			</div>
		</div>
	);
};

StatsTableRow.propTypes = {
	category: PropTypes.string.isRequired,
	activeQuantity: PropTypes.number.isRequired,
	archivedQuantity: PropTypes.number.isRequired
};

export default StatsTableRow;
