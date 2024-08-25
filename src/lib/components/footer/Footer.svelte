<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Checkbox from '$lib/components/footer/bits/Checkbox.svelte';
	import Link from '$lib/components/footer/bits/Link.svelte';
	import Title from '$lib/components/footer/bits/Title.svelte';
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
	<div class="content">
		<div class="max-w-screen-xl px-4 mx-auto xl:px-2">
			<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
				<div class="space-y-4">
					<Title title="Appstract" />
					<div class="space-y-4">
						{#each navigation as nav}
							<Link href={nav.href} title={nav.title} />
						{/each}
					</div>
				</div>
				<div class="space-y-4">
					<Title title="Tjänster" />
					<div class="space-y-4">
						{#each services as service}
							<Link href={service.slug} title={service.title} />
						{/each}
					</div>
				</div>
				<div class="space-y-4">
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
			</div>
			<div class="my-12">
				<div class="space-y-4">
					<Title title="Följ oss på sociala medier" />
					<Socials />
				</div>
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
	footer {
		@apply border-t;
	}
	.btn-container {
		@apply pt-4 w-full md:w-fit;
	}
	.content {
		@apply py-12 bg-[#fcfcff];
	}

	a {
		@apply hover:underline;
	}

	p {
		@apply text-xxs font-light text-balance;
	}

	form {
		@apply flex flex-col gap-4;
	}

	input {
		&:focus {
			@apply border-black;
		}
		&::placeholder {
			@apply text-opacity-70;
		}
		@apply border-black/50 min-w-64 block w-full p-4 bg-transparent rounded border outline-none ring-0 text-base focus-within:bg-transparent transition-all duration-200 ease-in-out;
	}

	button {
		@apply p-2 text-white rounded;
	}

	.error {
		@apply text-xxs text-red-500 transition-all duration-200 ease-in-out;
	}
</style>
