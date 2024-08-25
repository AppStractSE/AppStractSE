<div class="flex items-start">
	<label class="checkbox-container"
		>Jag godkänner att mina uppgifter sparas och används för att skicka nyhetsbrev.
		<input type="checkbox" />
		<span class="checkmark"></span>
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
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;
		background-color: #eee;
		border-radius: 5px;
	}

	.checkbox-container input:checked ~ .checkmark {
		background-color: #2196f3;
	}
</style>
