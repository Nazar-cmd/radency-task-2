const categoryIconsNames = {
	task: "shopping-cart-solid.svg",
	random_thought: "head-side-virus-solid.svg",
	idea: "lightbulb-regular.svg",
	quote: "quote-right-solid.svg"
};

const dateRegex = new RegExp("\\d{1,4}([.\\-/])\\d{1,2}([.\\-/])\\d{1,4}", "g");

function getCategoryIconName(category) {
	return categoryIconsNames[category.replace(" ", "_").toLowerCase()];
}

function getAllDatesFromContent(content) {
	const dates = content.match(dateRegex);

	if (dates) {
		return dates.join(", ");
	}

	return "";
}

function getCurrentDate() {
	const today = new Date();
	const day = String(today.getDate()).padStart(2, "0");
	const month = today.toLocaleString("default", { month: "long" });
	const year = today.getFullYear();

	return `${month} ${day}, ${year}`;
}

export { getCategoryIconName, getAllDatesFromContent, getCurrentDate };
