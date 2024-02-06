<script>
	import Course from "./Course.svelte";
	let textValue = '';
	let noob = ''
	
	function nameInput(event){
		const enteredValue = event.target.value;
		noob = enteredValue;
		console.log(event);
	}
</script>

<main>
	<textarea name="" placeholder="Enter course goal" id="" on:input= "{nameInput}" cols="30" rows="5"></textarea>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}




	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<Course

textValue = {noob}

/>