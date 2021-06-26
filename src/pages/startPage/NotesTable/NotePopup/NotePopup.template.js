import PropTypes from "prop-types";
import { useState } from "react";
import { getCurrentDate } from "utils";

const NotePopupTemplate = ({ onClose, submitFunction }) => {
	const [noteFields, setNoteFields] = useState({
		name: "",
		category: "",
		content: ""
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setNoteFields((state) => ({
			...state,
			[name]: value
		}));
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		onClose();

		const note = {
			...noteFields,
			created: getCurrentDate(),
			archived: false
		};

		submitFunction(note);
	};

	return (
		<div className="note__popup">
			<div className="note__popup__exit">
				<img
					className="note__popup__exit_icon"
					src="assets/icons/times-solid.svg"
					alt="close"
					onClick={onClose}
				/>
			</div>
			<form
				className="note__popup_form"
				autoComplete="off"
				onSubmit={onFormSubmit}>
				<div className="popup__group">
					<input
						name="name"
						type="text"
						id="note__name"
						className="popup__input"
						placeholder="Note name"
						value={noteFields.name}
						onChange={handleInputChange}
						required
					/>
					<label htmlFor="note__name" className="popup__label">
						Note name
					</label>
				</div>
				<div className="popup__group popup__input_select">
					<select
						name="category"
						className="popup__input"
						id="note__category"
						value={noteFields.category}
						onChange={handleInputChange}
						required>
						<option className="popup__input_variant" value="" disabled />
						<option className="popup__input_variant" value="Random Thought">
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
						name="content"
						id="note__content"
						className="popup__input popup__input_textarea"
						placeholder="Note content"
						rows="3"
						onChange={handleInputChange}
						value={noteFields.content}
						required
					/>
					<label htmlFor="note__content" className="popup__label">
						Note content
					</label>
				</div>
				<button type="submit" className="popup__button popup__button_submit">
					<h3>CONFIRM</h3>
				</button>
			</form>
		</div>
	);
};

NotePopupTemplate.propTypes = {
	submitFunction: PropTypes.func,
	onClose: PropTypes.func.isRequired
};

export default NotePopupTemplate;
