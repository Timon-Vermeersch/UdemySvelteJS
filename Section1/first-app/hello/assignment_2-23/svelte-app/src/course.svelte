<script>
    export let textValue;
    $: hasExclamation = textValue.includes('!')
</script>
<style>
    	.highlight{
		color: #ff3e00;
	}
    h1 {
		color: #55382f;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}
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

<main>
    <h1 class:highlight={hasExclamation}>{textValue}</h1>
</main>


