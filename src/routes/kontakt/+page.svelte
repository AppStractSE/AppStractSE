<script>
	import ContactForm from '$lib/components/forms/ContactForm.svelte';
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section>
	<div
		class="transition-all duration-500 ease-in-out {mounted
			? 'translate-y-0 opacity-100'
			: 'translate-y-12 opacity-0'}"
	>
		<div class="spacer"></div>
		<BreadcrumbsBlock />
		<div class="px-4 py-12 mx-auto space-y-8 xl:px-2">
			<div class="max-w-screen-xl mx-auto">
				<div class="grid gap-12 md:grid-cols-2">
					<div class="w-full space-y-4">
						<h2>Prata med oss redan idag!</h2>
						<p>
							{`Vi på Appstract erbjuder professionella IT-lösningar utan förvirring eller dolda avgifter. Vår filosofi är att göra design tillgänglig och intuitiv för alla, utan en massa krångel!\n\nBoka ett digitalt möte med oss för att diskutera dina specifika behov. Under mötet kommer vi att introducera vår arbetsmetodik och berätta hur vi tror vi kan göra en positiv inverkan!\n\nHoppas vi hörs!`}
						</p>
					</div>
					<div class="max-w-lg justify-self-end">
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<ServicesSection />

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}
	p {
		@apply text-base leading-tight text-balance whitespace-pre-line;
		font-family: var(--font-esteban);
	}
	section:first-of-type {
		background: url('/images/hero.png');
		min-height: 90vh;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
</style>
