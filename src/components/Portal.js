import { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const Portal = ({ children, parent, className }) => {
	const el = useMemo(() => document.createElement("div"), []);
	useEffect(() => {
		const target = parent && parent.appendChild ? parent : document.body;
		const classList = ["portal-container"];
		if (className) className.split(" ").forEach((item) => classList.push(item));
		classList.forEach((item) => el.classList.add(item));
		target.appendChild(el);
		return () => {
			target.removeChild(el);
		};
	}, [el, parent, className]);
	return ReactDOM.createPortal(children, el);
};

Portal.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	parent: PropTypes.node
};

export default Portal;
