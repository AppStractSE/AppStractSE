<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Checkbox from '$lib/components/footer/bits/Checkbox.svelte';
	import Link from '$lib/components/footer/bits/Link.svelte';
	import Title from '$lib/components/footer/bits/Title.svelte';
	import { guides } from '$lib/data/guides';
	import { navigation } from '$lib/data/navigation';
	import { services } from '$lib/data/services';
	import Socials from '../drawer/bits/Socials.svelte';

	export let email = '';
	let errors: Record<string, string[]> = {};
	let errorClassNames = 'mt-2 mb-4 max-h-full h-fit opacity-100';
	let errorBaseClassNames = 'h-0 max-h-0 opacity-0';
	let inputClassNames = 'border-black focus-within:border-blue-500';
	let inputErrorClassNames = 'border-red-500 focus-within:border-red-700';
</script>

<footer>
	<img
		src="/images/appstract_text.png"
		alt="Appstract"
		class="w-full max-w-screen-xl px-4 mx-auto xl:px-2"
	/>
	<div class="content">
		<div class="max-w-screen-xl px-4 mx-auto xl:px-2">
			<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:justify-between">
				<div class="space-y-4 xl:basis-4/12">
					<Title title="Prenumerera på vårt nyhetsbrev" />
					<p>Få de senaste nyheterna och uppdateringarna direkt till din inkorg.</p>
					<form>
						<input
							placeholder="Din e-postadress"
							id="email"
							type="email"
							bind:value={email}
							class={!errors.email ? inputClassNames : inputErrorClassNames}
						/>

						<Checkbox />
						<div class="btn-container">
							<Button title="Prenumerera" variation="outline" />
						</div>
					</form>
				</div>
				<div class="flex-1 space-y-4">
					<Title title="Appstract" />
					<div class="space-y-4">
						{#each navigation as nav}
							<Link href={nav.href} title={nav.title} />
						{/each}
					</div>
				</div>
				<div class="flex-1 space-y-4">
					<Title title="Tjänster" />
					<div class="space-y-4">
						{#each services as service}
							<Link href={service.slug} title={service.title} />
						{/each}
					</div>
				</div>
				<div class="flex-1 space-y-4">
					<Title title="Guider & e-böcker" />
					<div class="space-y-4">
						{#each guides as guide}
							<Link href={guide.slug} title={guide.title} />
						{/each}
					</div>
				</div>
			</div>
			<div class="my-12">
				<Socials />
			</div>
			<div class="my-12 mx-auto w-full h-[1px] bg-white/50"></div>
			<div class="flex flex-col justify-between gap-4 md:flex-row">
				<p>© 2024 All Rights Reserved.</p>
				<div class="flex divide-x">
					<a href="/">
						<p class="pr-2">Integritetspolicy</p>
					</a>
					<a href="/">
						<p class="px-2">Användarvillkor</p>
					</a>
					<a href="/sitemap">
						<p class="pl-2">Sitemap</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.btn-container {
		@apply pt-4 w-full md:w-fit;
	}
	.content {
		@apply py-12 text-white bg-[#363a50];
	}

	a {
		@apply hover:underline;
	}

	p {
		@apply text-xxs font-light text-balance;
		font-family: var(--font-varela);
	}

	form {
		@apply flex flex-col gap-4;
	}

	input {
		font-family: var(--font-varela);
		@apply min-w-64 block w-full p-4 text-[#f3f1ff] bg-transparent rounded border border-[#f3f1ff] outline-none ring-0 text-base focus-within:bg-transparent transition-all duration-200 ease-in-out;
	}

	::placeholder {
		@apply text-white text-opacity-70;
	}

	button {
		@apply p-2 text-white rounded;
	}

	.error {
		@apply text-xxs text-red-500 transition-all duration-200 ease-in-out;
	}
</style>
