<script>
	import Icon from '@iconify/svelte';
	let isChecked = false;
</script>

<div class="flex items-start">
	<label class="checkbox-container">
		Jag godkänner att mina uppgifter sparas och används för att skicka nyhetsbrev.
		<input type="checkbox" bind:checked={isChecked} />
		<span class="checkmark">
			{#if isChecked}
				<Icon class="text-white" icon="ic:outline-check" />
			{/if}
		</span>
	</label>
</div>

<style lang="scss">
	.checkbox-container {
		display: block;
		position: relative;
		padding-left: 35px;
		margin-top: 10px;
		font-size: 14px;
		cursor: pointer;
		user-select: none;
	}

	input {
		display: none;
		visibility: hidden;
	}

	.checkmark {
		@apply absolute top-0 left-0 transition-all items-center justify-center flex border border-white/50;
		height: 25px;
		width: 25px;
		border-radius: 5px;
	}

	.checkbox-container input:checked ~ .checkmark {
		@apply bg-blue-700 border-blue-700;
	}
</style>
