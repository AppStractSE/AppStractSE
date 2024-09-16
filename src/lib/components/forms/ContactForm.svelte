<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import toast from 'svelte-french-toast';
	import { z } from 'zod';

	// Define the schema using Zod
	const schema = z.object({
		'form-name': z.string().optional(),
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

	// Helper to format the data for URL encoding
	const encodeFormData = (data: Record<string, any>) => {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	};

	const handleSubmit = (event: Event) => {
		event.preventDefault(); // Prevent the form from refreshing the page

		// Reset errors
		errors = {};

		const result = schema.safeParse({
			fullName,
			email,
			businessName,
			phoneNumber,
			message
		});

		if (!result.success) {
			// Collect errors for display
			result.error.errors.forEach((err) => {
				const field = err.path[0];
				if (!errors[field]) {
					errors[field] = [];
				}
				errors[field].push(err.message);
			});
			return;
		}

		const formData = {
			'form-name': 'contact-form',
			fullName,
			email,
			businessName,
			phoneNumber,
			message
		};

		toast
			.promise(
				fetch('/forms.html', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: encodeFormData(formData)
				}),
				{
					loading: 'Skickar meddelande...',
					success: 'Meddelande skickat! Vi återkommer så snart vi kan.',
					error: 'Något gick fel med att skicka meddelandet. Försök igen.'
				},
				{
					success: {
						duration: 8000,
						icon: '💪'
					}
				}
			)
			.catch((error) => {
				console.log(error.message);
			})
			.then(() => {
				console.log('Form submitted');
				fullName = '';
				email = '';
				businessName = '';
				phoneNumber = '';
				message = '';
			});
	};

	let errorClassNames = 'mt-2 mb-4 max-h-full h-fit opacity-100';
	let errorBaseClassNames = 'h-0 max-h-0 opacity-0';
	let inputClassNames = 'border-black/25 focus-within:border-black/50';
	let inputErrorClassNames = 'border-red-500 focus-within:border-red-700';
</script>

<div class="w-full">
	<form on:submit={handleSubmit} name="contact-form">
		<input type="hidden" name="required-field" value="contact-form" />

		<h6>
			Skicka in dina uppgifter via formuläret nedan. Vi ser fram emot att återkoppla till dig
			snarast!
		</h6>
		<div>
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

		<div>
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

		<div class="flex gap-4">
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
		<p class="text-sm">
			Genom att klicka på skicka godkänner du vår{' '}
			<a href="/integritetspolicy" target="_blank" class="underline underline-offset-4">
				integritetspolicy
			</a>.
		</p>
		<div>
			<Button variation="primary" size="lg" type="submit" title="Skicka meddelande" />
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
		@apply block w-full p-4 bg-white rounded-xl border outline-none ring-0 text-base focus-within:bg-white transition-all duration-200 ease-in-out;
	}
	::placeholder {
		@apply text-black/50;
	}
	button {
		@apply p-2 text-white rounded;
	}
	.error {
		@apply text-xxs text-red-500 transition-all duration-200 ease-in-out;
	}
</style>
