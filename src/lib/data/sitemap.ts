import { articles } from '$lib/data/articles';
import { cases } from '$lib/data/cases';
import { guides } from '$lib/data/guides';
import { navigation } from '$lib/data/navigation';
import { services } from '$lib/data/services';

interface RouteInfo {
	slug: string;
	title: string;
}

export const guideRoutes: RouteInfo[] = guides.map((guide) => ({
	slug: guide.slug,
	title: guide.title
}));

export const caseRoutes: RouteInfo[] = cases.map((caseItem) => ({
	slug: caseItem.slug,
	title: caseItem.client
}));

export const articleRoutes: RouteInfo[] = articles.map((article) => ({
	slug: article.slug,
	title: article.title
}));

export const navigationRoutes: RouteInfo[] = navigation.map((navItem) => ({
	slug: navItem.href,
	title: navItem.title
}));

export const serviceRoutes: RouteInfo[] = services.map((service) => ({
	slug: service.slug,
	title: service.title
}));

export const sitemap: RouteInfo[] = [
	...navigationRoutes,
	...guideRoutes,
	...caseRoutes,
	...articleRoutes,
	...serviceRoutes
];
