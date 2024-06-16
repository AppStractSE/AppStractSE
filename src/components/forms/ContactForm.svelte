<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { z } from 'zod';
	import Button from '../button/Button.svelte';

	// Define the schema using Zod
	const schema = z.object({
		fullName: z.string().min(2, { message: 'Ange minst två bokstäver' }),
		email: z.string().email({ message: 'Ange en giltig e-postadress' }),
		businessName: z.string().optional(),
		phoneNumber: z.string().optional(),
		message: z.string().min(10, { message: 'Ange minst tio tecken' })
	});

	let fullName = '';
	let email = '';
	let businessName = '';
	let phoneNumber = '';
	let message = '';
	let errors: Record<string, string[]> = {};

	const dispatch = createEventDispatcher();

	const handleSubmit = () => {
		const result = schema.safeParse({
			fullName,
			email,
			businessName,
			phoneNumber,
			message
		});

		if (result.success) {
			// Form is valid, dispatch event or handle form submission
			dispatch('submit', result.data);
		} else {
			// Form is invalid, update errors
			errors = result.error.flatten().fieldErrors;
		}
	};

	let errorClassNames = 'mt-2 mb-4 max-h-full h-fit opacity-100';
	let errorBaseClassNames = 'h-0 max-h-0 opacity-0';
	let inputClassNames = 'border-black focus-within:border-blue-500';
	let inputErrorClassNames = 'border-red-500 focus-within:border-red-700';
</script>

<div class="w-full">
	<form>
		<div class="flex gap-4">
			<div class="flex-1">
				<input
					placeholder="För- och efternamn"
					id="fullName"
					type="text"
					bind:value={fullName}
					class={!errors.fullName ? inputClassNames : inputErrorClassNames}
				/>
				<div class="error {errors.fullName ? errorClassNames : errorBaseClassNames}">
					{errors.fullName ? errors.fullName[0] : ''}
				</div>
			</div>

			<div class="flex-1">
				<input
					placeholder="E-postadress"
					id="email"
					type="email"
					bind:value={email}
					class={!errors.email ? inputClassNames : inputErrorClassNames}
				/>
				<div class="error {errors.email ? errorClassNames : errorBaseClassNames}">
					{errors.email ? errors.email[0] : ''}
				</div>
			</div>
		</div>

		<div>
			<input
				placeholder="Företagsnamn"
				id="businessName"
				type="text"
				bind:value={businessName}
				class={!errors.businessName ? inputClassNames : inputErrorClassNames}
			/>
			<div class="error {errors.businessName ? errorClassNames : errorBaseClassNames}">
				{errors.businessName ? errors.businessName[0] : ''}
			</div>
		</div>

		<div>
			<input
				placeholder="Telefonnummer"
				id="phoneNumber"
				type="tel"
				bind:value={phoneNumber}
				class={!errors.phoneNumber ? inputClassNames : inputErrorClassNames}
			/>
			<div class="error {errors.phoneNumber ? errorClassNames : errorBaseClassNames}">
				{errors.phoneNumber ? errors.phoneNumber[0] : ''}
			</div>
		</div>

		<div>
			<textarea
				placeholder="Meddelande"
				id="message"
				bind:value={message}
				class={!errors.message ? inputClassNames : inputErrorClassNames}
			></textarea>
			<div class="error {errors.message ? errorClassNames : errorBaseClassNames}">
				{errors.message ? errors.message[0] : ''}
			</div>
		</div>
		<div>
			<Button
				variation="primary"
				size="lg"
				type="button"
				title="Hör av er så fort ni kan!"
				onClick={handleSubmit}
			/>
		</div>
	</form>
</div>

<style lang="scss">
	form {
		@apply space-y-4;
	}
	textarea {
		@apply h-32 duration-200 ease-in-out transition-all resize-none focus-within:h-48;
	}
	input,
	textarea {
		font-family: var(--font-varela);
		@apply block w-full p-4 text-black bg-[#f3f1ff] rounded border outline-none ring-0 text-base focus-within:bg-white transition-all duration-200 ease-in-out;
	}
	::placeholder {
		@apply text-black text-opacity-70;
	}
	button {
		@apply p-2 text-white rounded;
	}
	.error {
		@apply text-xxs text-red-500 transition-all duration-200 ease-in-out;
	}
</style>
