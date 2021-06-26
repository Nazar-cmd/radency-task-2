import React from "react";
import PropTypes from "prop-types";
import Portal from "components/Portal";
import NotePopupTemplate from "./NotePopup.template";

const NotePopup = ({ open, closePopup, submitPopup }) => {
	const [active, setActive] = React.useState(false);
	const backdrop = React.useRef(null);

	React.useEffect(() => {
		const { current } = backdrop;

		const transitionEnd = () => setActive(open);

		const keyHandler = (e) => [27].indexOf(e.which) >= 0 && closePopup();

		const clickHandler = (e) => e.target === current && closePopup();

		if (current) {
			current.addEventListener("transitionend", transitionEnd);
			current.addEventListener("click", clickHandler);
			window.addEventListener("keyup", keyHandler);
		}

		if (open) {
			window.setTimeout(() => {
				document.activeElement.blur();
				setActive(open);
			}, 10);
		}

		return () => {
			if (current) {
				current.removeEventListener("transitionend", transitionEnd);
				current.removeEventListener("click", clickHandler);
			}

			document.querySelector("#root").removeAttribute("inert");
			window.removeEventListener("keyup", keyHandler);
		};
	}, [open, closePopup]);

	const stateClassName = active && open ? "" : "closed";

	return (
		<>
			{(open || active) && (
				<Portal>
					<div
						ref={backdrop}
						className={`note__popup__container ${stateClassName}`}>
						<NotePopupTemplate
							onClose={closePopup}
							submitFunction={submitPopup}
						/>
					</div>
				</Portal>
			)}
		</>
	);
};

NotePopup.propTypes = {
	open: PropTypes.bool.isRequired,
	closePopup: PropTypes.func.isRequired,
	submitPopup: PropTypes.func
};

export default NotePopup;
