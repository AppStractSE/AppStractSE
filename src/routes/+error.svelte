<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	const messages = [
		'trampade katten på tangentbordet?',
		'något gick snett!',
		'här fanns inget att se!',
		'ibland går det inte som man tänkt sig.',
		'här var det tomt!',
		'nu är vi uppe bland molnen!'
	];
	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
</script>

<section>
	<div class="max-w-screen-xl px-4 mx-auto space-y-4 text-center place-items-center xl:px-0">
		<h1>404</h1>
		<h2>Oops, {randomMessage}</h2>
		<p>Vi kunde inte hitta sidan du letar efter. Kanske har den flyttats eller tagits bort?</p>
		<div class="btn-container">
			<Button title="Gå till startsidan" href="/" variation="primary" size="lg" />
		</div>
	</div>
</section>

<ServicesSection />

<style lang="scss">
	section {
		@apply min-h-screen place-items-center grid;
	}
	.btn-container {
		@apply pt-4 w-fit mx-auto;
	}
</style>
