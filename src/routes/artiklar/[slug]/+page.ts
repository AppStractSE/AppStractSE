import { error } from '@sveltejs/kit';
import { articles } from '$lib/data/articles';

export const load = ({ params }) => {
	const article = articles.find((article) => article.slug === '/artiklar/' + params.slug);

	if (!article) throw error(404);
	return { article };
};
