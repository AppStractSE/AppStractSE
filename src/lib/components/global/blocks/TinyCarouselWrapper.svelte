<script lang="ts">
	import Icon from '@iconify/svelte';
	import TinyCarousel from '../bits/TinyCarousel.svelte';
	$: innerWidth = 0;
	$: mdScreen = innerWidth < 1024;
	$: dataCopy = [...data, ...data];
	const data = [
		{
			title: 'Krångelfritt & enkelt',
			icon: 'fluent:star-emphasis-24-regular'
		},
		{
			title: 'Flexibelt, kvalitativt - alltid',
			icon: 'fluent:options-28-regular'
		},
		{
			title: 'Modernt & långsiktigt',
			icon: 'mingcute:safety-certificate-line'
		}
	];
</script>

<svelte:window bind:innerWidth />

<TinyCarousel>
	{#each mdScreen ? dataCopy : data as slide}
		<div class="embla__slide">
			<div
				class="px-4 py-2.5 bg-sunglow-100 text-xs outline outline-1 outline-black/25 rounded-full flex items-center gap-2"
			>
				<Icon icon={slide.icon} class="text-xl" />{slide.title}
			</div>
		</div>
	{/each}
</TinyCarousel>

<style lang="scss">
	.embla__slide {
		flex: 0 0 auto;
		min-width: fit-content;
		height: unset;
		@apply space-y-2 my-2;
	}
</style>
