/* eslint-disable @typescript-eslint/no-explicit-any */
export const getRandomItems = (array: any[], numItems: number): any[] => {
	const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle array
	return shuffled.slice(0, numItems); // Get sub-array of first numItems
};

export const truncateText = (text: string, maxLength: number): string => {
	if (text.length > maxLength) {
		let truncatedText = text.substring(0, maxLength);
		truncatedText = truncatedText.substring(0, truncatedText.lastIndexOf(' '));
		truncatedText += '...';
		return truncatedText;
	}
	return text;
};
