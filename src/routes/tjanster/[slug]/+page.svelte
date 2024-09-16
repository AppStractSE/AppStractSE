<script lang="ts">
	import Contact from '$lib/components/drawer/bits/Contact.svelte';
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import ProjectsSection from '$lib/components/global/sections/ProjectsSection.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import ArticleSection from '$lib/components/global/sections/slug/ArticleSection.svelte';
	import HeroSection from '$lib/components/global/sections/slug/HeroSection.svelte';
	import ReviewsSection from '$lib/components/global/sections/slug/ReviewsSection.svelte';
	import WhatWeDoSection from '$lib/components/global/sections/slug/WhatWeDoSection.svelte';
	export let data;
	$: service = data.service;
</script>

<svelte:head>
	<title>Appstract | {service.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeroSection title={service.title} description={service.description} />
<BreadcrumbsBlock />
<section>
	<div class="max-w-screen-xl mx-auto">
		<div class="flex flex-col items-center gap-12 px-4 md:flex-row xl:px-0">
			<div class="overflow-hidden rounded-md basis-6/12">
				<img src={service.about.image} class="object-cover w-full h-full" alt="" />
			</div>
			<div class="basis-6/12">
				<h2 class="mb-6">{service.about.title}</h2>
				<p>
					{service.about.description}
				</p>
			</div>
		</div>
	</div>
</section>
<WhatWeDoSection {service} />
<ArticleSection {service} />
<ProjectsSection />
<section class="max-w-screen-xl px-4 mx-auto my-12 lg:my-24 xl:px-0">
	<Contact
		title="Nyfiken på vad vi kan åstadkomma för dig? Låt oss prata mer!"
		description="Vi är alltid redo att hjälpa dig med dina digitala utmaningar. Kontakta oss för att boka ett möte eller för att få svar på dina frågor."
	/>
</section>
<ServicesSection />
<ReviewsSection />
<ContactSection />
