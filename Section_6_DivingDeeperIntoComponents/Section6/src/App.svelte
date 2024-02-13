<script>
	import {tick} from 'svelte';
	import Product from "./Product.svelte";
	import Modal from "./Modal.svelte";
	let text = 'Type here bro';
	function addToCart(event)
	{
		console.log(event);
		alert('hello')
	}
	function deleteProduct(event)
	{
		console.log(event.detail);
	}

	function transform(event){
		if (event.which !== 9) {return;}

		event.preventDefault();

		const selectionStart = event.target.selectionStart;
		const selectionEnd = event.target.selectionEnd;
		const value = event.target.value;

		text = value.slice(0, selectionStart)+
		value.slice(selectionStart,selectionEnd).toUpperCase()+
		value.slice(selectionEnd);

		tick().then(()=>{event.target.selectionStart = selectionStart;
		event.target.selectionEnd = selectionEnd;})
		
	}
	let products = 
	[
		{
			id:'p1',
			title:'Narnia',
			price:9.99
		},
		{
			id:'p2',
			title:'GOT',
			price:9.99,
			bestseller: true
		}
	];

	let showModal = false
	// let closable = false
	
</script>

<style>

</style>

{#each products as product}
<Product 

	{...product}
	on:add-to-cart = {addToCart}
	on:delete = {() => alert('Deleted')}
	/>
{/each}


<button on:click="{() => showModal = true}"  >Show modal</button>


{#if showModal}
	<Modal 
	on:cancel = "{() => showModal = false}" 
	on:close = "{() => showModal = false}"
	let:didAgreed = {closable}> 
		<h1 slot="header">HELLO</h1>
		<h2 slot="content">YOOOOO</h2>
		<button on:click = "{() => showModal = false}" 
			disabled={!closable} slot = 'footer'>CONFIRM</button>
	</Modal>
{/if}


<textarea value={text} on:keydown={transform}></textarea>
