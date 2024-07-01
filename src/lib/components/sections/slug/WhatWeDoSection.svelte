<script lang="ts">
	export let service;
</script>

<section>
	<div class="max-w-screen-xl mx-auto">
		<h2 class="mb-12">Det här gör vi inom {service.title}</h2>
		<div class="grid justify-between grid-cols-1 gap-12 md:grid-cols-3">
			{#each service.what_we_do as step, index}
				<div class="pb-4 space-y-6 border-b">
					<h3>{step.title}</h3>
					<p>
						{step.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@apply my-12 lg:my-24;
	}
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}

	p {
		@apply text-base leading-normal;
		font-family: var(--font-esteban);
	}
	h3 {
		@apply text-lg font-bold;
		font-family: var(--font-varela);
	}
</style>
