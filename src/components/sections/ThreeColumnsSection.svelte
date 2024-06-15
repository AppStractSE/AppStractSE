<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from '../button/Button.svelte';
	const columnData = [
		{
			title: 'Krångelfritt & enkelt',
			text: 'Vårt mål är att skapa en så smidig och enkel upplevelse som möjligt för dig som kund.',
			icon: 'fluent:star-emphasis-24-regular'
		},
		{
			title: 'Flexibelt, kvalitativt - alltid',
			text: 'Har ni specifika behov? Inga problem! Vi specialiserar oss på skräddarsydda lösningar vilket medför hög kvalitet.',
			icon: 'fluent:options-28-regular'
		},
		{
			title: 'Modernt & långsiktigt',
			text: 'Moderna tekniker och metoder används vilket ger dig framtidssäkra och effektiva lösningar.',
			icon: 'mingcute:safety-certificate-line'
		}
	];
</script>

<section>
	<div class="max-w-screen-lg px-4 mx-auto space-y-4 xl:px-0">
		<h2>Varför Appstract?</h2>
		<!-- <p>
			Appstract erbjuder en rad olika tjänster som passar alla behov. Allt från skräddarsydd
			webbutveckling till grafisk design – vi levererar lösningar som tar ditt företag till nästa
			nivå.
		</p> -->
	</div>
	<div class="max-w-screen-xl px-4 mx-auto xl:px-0">
		<div class="grid justify-between grid-cols-1 gap-4 md:divide-x md:grid-cols-3">
			{#each columnData as column}
				<div class="px-2 py-4 space-y-6">
					<Icon icon={column.icon} class="mx-auto text-3xl" />
					<h3>{column.title}</h3>
					<p>{column.text}</p>
				</div>
			{/each}
		</div>
		<div class="mx-auto mt-12 w-fit">
			<Button title="Nyfiken? Prata med oss" href="/kontakt" variation="outline" size="lg" />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@apply my-12 space-y-12;
	}
	p,
	h2,
	h3 {
		@apply text-center text-balance;
	}
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}
	h3 {
		@apply text-xl font-bold;
		font-family: var(--font-varela);
	}
	p {
		@apply text-base leading-normal;
		font-family: var(--font-esteban);
	}
</style>
