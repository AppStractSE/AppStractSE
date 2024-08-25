import { services } from '$lib/data/services';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const service = services.find((service) => service.slug === '/tjanster/' + params.slug);
	if (!service) throw error(404);
	return {
		service
	};
};
