<script lang="ts">
	import Button from '../button/Button.svelte';

	$: innerWidth = 0;
	$: smScreen = innerWidth < 768;
</script>

<svelte:window bind:innerWidth />
<section>
	<div class="max-w-screen-xl py-12 mx-auto">
		<h1>Vi förverkligar abstrakta idéer och skapar digitala hållbara lösningar</h1>
		<p>
			Från idé till färdig digitalt skräddarsydd produkt, är vi din partner i skapandet och
			utvecklingen. Vi tar abstrakta koncept och omvandlar dem till konkreta resultat.
		</p>
		<div class="flex items-center justify-center mt-8">
			<Button variation="primary" title="Jag vill veta mer" href="/" size="lg" />
		</div>
	</div>
</section>

<style lang="scss">
	h1 {
		@apply text-center text-5xl text-balance font-semibold;
		font-family: var(--font-esteban);
	}
	p {
		@apply mt-6 mx-24 text-lg text-center text-balance;
		font-family: var(--font-varela);
	}
</style>
