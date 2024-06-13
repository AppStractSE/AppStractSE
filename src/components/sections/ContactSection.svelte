<script lang="ts">
	import ContactForm from '../forms/ContactForm.svelte';
</script>

<section>
	<div class="py-12 mx-auto space-y-8">
		<div class="max-w-screen-xl mx-auto">
			<div class="grid gap-12 md:grid-cols-2">
				<div class="w-full space-y-4">
					<h2>Prata med oss redan idag!</h2>
					<p>
						{`Vi på Appstract erbjuder professionella IT-lösningar utan förvirring eller dolda avgifter. Vår filosofi är att göra design tillgänglig och intuitiv för alla, utan en massa krångel!\n\nBoka ett digitalt möte med oss för att diskutera dina specifika behov. Under mötet kommer vi att introducera vår arbetsmetodik och berätta hur vi tror vi kan göra en positiv inverkan!\n\nHoppas vi hörs!`}
					</p>
				</div>
				<div class="max-w-lg justify-self-end">
					<ContactForm />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background: linear-gradient(
			180deg,
			rgba(243, 241, 255, 1) 0%,
			rgba(220, 214, 255, 1) 40%,
			rgba(220, 214, 255, 1) 60%,
			rgba(243, 241, 255, 1) 100%
		);
	}
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}
	p {
		@apply text-base leading-tight text-balance whitespace-pre-line;
		font-family: var(--font-esteban);
	}
</style>
