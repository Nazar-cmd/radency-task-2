import PropTypes from "prop-types";

const Table = ({ children }) => <div className="table">{children}</div>;

Table.propTypes = {
	children: PropTypes.node.isRequired
};

export default Table;
