const categoryIconsPath = {
	task: "assets/icons/shopping-cart-solid.svg",
	random_thought: "assets/icons/head-side-virus-solid.svg",
	idea: "assets/icons/lightbulb-regular.svg",
	quote: "assets/icons/quote-right-solid.svg"
};

const dateRegex = new RegExp("\\d{1,4}([.\\-/])\\d{1,2}([.\\-/])\\d{1,4}", "g");

function getCategoryIconPath(category) {
	return categoryIconsPath[category.replace(" ", "_").toLowerCase()];
}

function getAllDatesFromContent(content) {
	const dates = content.match(dateRegex);

	if (dates) {
		return dates.join(", ");
	}

	return "";
}

export { getCategoryIconPath, getAllDatesFromContent };
