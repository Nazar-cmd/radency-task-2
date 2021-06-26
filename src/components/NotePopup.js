import React from "react";
import PropTypes from "prop-types";
import Portal from "./Portal";

const NotePopup = ({ open, onClose }) => {
	const [active, setActive] = React.useState(false);
	const backdrop = React.useRef(null);

	React.useEffect(() => {
		const { current } = backdrop;

		const transitionEnd = () => setActive(open);

		const keyHandler = (e) => [27].indexOf(e.which) >= 0 && onClose();

		const clickHandler = (e) => e.target === current && onClose();

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
	}, [open, onClose]);

	const stateClassName = active && open ? "" : "closed";

	return (
		<>
			{(open || active) && (
				<Portal>
					<div
						ref={backdrop}
						className={`note__popup__container ${stateClassName}`}>
						<div className="note__popup">
							<div className="note__popup__exit">
								<img
									className="note__popup__exit_icon"
									src="assets/icons/times-solid.svg"
									alt="close"
								/>
							</div>
							<form className="note__popup_form" autoComplete="off">
								<div className="popup__group">
									<input
										type="text"
										id="note__name"
										className="popup__input"
										placeholder="Note name"
										required
									/>
									<label htmlFor="note__name" className="popup__label">
										Note name
									</label>
								</div>
								<div className="popup__group popup__input_select">
									<select
										className="popup__input"
										id="note__category"
										defaultValue=""
										required>
										<option
											className="popup__input_variant"
											value=""
											disabled
										/>
										<option
											className="popup__input_variant"
											value="Random Thought">
											Random Thought
										</option>
										<option className="popup__input_variant" value="Task">
											Task
										</option>
										<option className="popup__input_variant" value="Idea">
											Idea
										</option>
										<option className="popup__input_variant" value="Quote">
											Quote
										</option>
									</select>
									<span className="select-highlight" />
									<label className="popup__label">Category</label>
								</div>
								<div className="popup__group">
									<textarea
										id="note__content"
										className="popup__input popup__input_textarea"
										placeholder="Note content"
										rows="3"
										required
									/>
									<label htmlFor="note__content" className="popup__label">
										Note content
									</label>
								</div>
								<button
									type="submit"
									className="popup__button popup__button_submit">
									<h3>CONFIRM</h3>
								</button>
							</form>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
};

NotePopup.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default NotePopup;
