import { useState } from "react";

const usePopupOpen = () => {
	const [popupOpen, setPopupOpen] = useState(false);

	const closePopup = () => setPopupOpen(false);
	const openPopup = () => setPopupOpen(true);

	return { closePopup, openPopup, popupOpen };
};

export default usePopupOpen;
