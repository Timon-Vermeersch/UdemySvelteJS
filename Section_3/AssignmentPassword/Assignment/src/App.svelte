<script>

let pw = ""
let passwordList = []
let formState = 'empty'
function updateFormState()
{
	if (pw.trim().length === 0) 
	{
      formState = 'empty';
	}


	else if(pw.trim().length < 5)
	{
		formState = 'tooShort';
		console.log(formState)
		return;
	}
	else if(pw.trim().length > 10)
	{
		formState = 'tooLong';
		console.log(formState)
		return;
	}

	formState = 'done';
	
	
	
}
function handleKeydown(event) 
{
if (event.key === 'Enter')
	{
		savePW();
	}
}

function add()
{
	if(formState === 'done')
	{
		passwordList = [...passwordList , {arrayPW : pw , id:Math.random()}]
		return;
	}
	return "fixFormstate"

	
}
function deleteFromList(passwordId)
{
	passwordList = passwordList.filter(password => password.id !== passwordId);
}

</script>

<style>
	body{
		background-color: rgb(214, 153, 79);
	}
</style>
  
<body>
	<h1>Assignment</h1>

	<p>Solve these tasks.</p>

	<ol>
		<li>Add a password input field and save the user input in a variable.</li>
		<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
		<li>Output the password in a paragraph tag if it's between these boundaries.</li>
		<li>Add a button and let the user add the passwords to an array.</li>
		<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
		<li>Bonus: If a password is clicked, remove it from the list.</li>
	</ol>

	<div class = 'form'>

		<input type="text" bind:value={pw} on:keydown={handleKeydown} on:input={updateFormState}>
		<button on:click={add}>AddToList</button>

	</div>


	{#if formState === 'tooShort'}
		<p>tooShort</p>
	{:else if formState === 'tooLong'}
		<p>tooLong</p>
	{:else if formState === 'done'}
		<p>{pw}</p>	
	{:else}
		<p>Enter a password</p>
	{/if}

<ul>
	{#each passwordList as password (password.id) }
	 <li>{password.arrayPW} <button on:click={() => deleteFromList(password.id)}>x</button></li>
	{/each}
</ul>

</body>