import { error } from '@sveltejs/kit';
import { guides } from '../../../data/guides.js';

export const load = ({ params }) => {
	const guide = guides.find((service) => service.slug === '/guider-och-ebocker/' + params.slug);

	if (!guide) throw error(404);
	return { guide };
};
