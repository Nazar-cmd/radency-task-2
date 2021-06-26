import PropTypes from "prop-types";

const Table = ({ children }) => (
	<div className="table__wrapper">
		<div className="table">{children}</div>
	</div>
);

Table.propTypes = {
	children: PropTypes.node.isRequired
};

export default Table;
