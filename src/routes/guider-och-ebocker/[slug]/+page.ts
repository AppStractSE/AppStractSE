import { guides } from '$lib/data/guides';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const guide = guides.find((guide) => guide.slug === '/guider-och-ebocker/' + params.slug);

	if (!guide) throw error(404);
	return { guide };
};
