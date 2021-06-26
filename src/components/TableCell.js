import PropTypes from "prop-types";

const TableCell = ({ children }) => (
	<div className="table__cell">{children}</div>
);

TableCell.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default TableCell;
