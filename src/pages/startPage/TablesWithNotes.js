import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const TableWithNotes = ({ children }) => {
	const { notes } = useSelector((state) => state.notes);

	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { notes });
		}
		return child;
	});

	return <>{childrenWithProps}</>;
};

TableWithNotes.propTypes = {
	children: PropTypes.node.isRequired
};

export default TableWithNotes;
