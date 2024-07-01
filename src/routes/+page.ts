import { error } from '@sveltejs/kit';

export const load = async () => {
	const metadata = {
		title: 'Appstract | Home Test',
		description: 'Welcome to the Appstract demo app homepage.',
		ogTitle: 'Appstract | Home',
		ogDescription: 'Welcome to the Appstract demo app homepage.',
		ogImage: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
		ogUrl: 'https://www.dev.appstract.se',
		ogType: 'website'
	};

	if (!metadata) throw error(404);
	return {
		metadata
	};
};
