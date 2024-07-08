<script lang="ts">
	import { services } from '$lib/data/services';
</script>

<div class="block">
	{#each services as service}
		<a href={service.slug}>
			<div class="flex items-stretch gap-4">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src={service.image} class="object-cover w-16 h-16 rounded aspect-square outline outline-1" />
				<div class="space-y-2">
					<h6>{service.title}</h6>
					<p>{service.description}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	.block {
		@apply grid justify-between grid-cols-1 gap-y-4 gap-x-8 lg:grid-cols-2;
	}
	a {
		@apply hover:underline;
		& img {
			@apply opacity-70 transition-all duration-200 ease-in-out;
		}
		&:hover img {
			@apply opacity-100;
		}
	}
	h6 {
		@apply font-bold text-sm;
		font-family: var(--font-varela);
	}
	p {
		@apply text-xs font-light text-balance;
		font-family: var(--font-esteban);
	}
</style>
