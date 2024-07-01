interface Social {
	title: string;
	icon: string;
	link: string;
	shareURL?: string;
}
export const socials: Social[] = [
	{
		title: 'X',
		icon: 'pajamas:twitter',
		link: 'https://www.x.com/appstractSE',
		shareURL: 'https://x.com/intent/post?url='
	},
	{
		title: 'Threads',
		icon: 'iconoir:threads',
		link: 'https://www.threads.net/@appstract.se',
		shareURL: 'https://www.threads.net/intent/post?text='
	},
	{
		title: 'Instagram',
		icon: 'iconoir:instagram',
		link: 'https://www.instagram.com/appstract.se'
	},
	{
		title: 'LinkedIn',
		icon: 'basil:linkedin-outline',
		link: 'https://linkedin.com/company/appstract-se',
		shareURL: 'https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl='
	},
	{
		title: 'Facebook',
		icon: 'iconoir:facebook',
		link: 'https://www.facebook.com/appstract.se',
		shareURL: 'https://www.facebook.com/sharer/sharer.php?u='
	}
];
