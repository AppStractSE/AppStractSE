import { error } from '@sveltejs/kit';
import { services } from '../../../data/services.js';

export const load = ({ params }) => {
	const service = services.find((service) => service.slug === '/tjanster/' + params.slug);

	if (!service) throw error(404);
	return {
		service
	};
};
