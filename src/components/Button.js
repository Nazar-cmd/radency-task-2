import PropTypes from "prop-types";

const Button = ({ onClick, text }) => (
	<div className="add_note__container">
		<button type="button" className="add_note__button" onClick={onClick}>
			<span className="add_note__button_text">{text}</span>
		</button>
	</div>
);

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string
};

export default Button;
