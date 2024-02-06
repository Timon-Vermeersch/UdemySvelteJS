<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "max"; 
	let age = 30;
	let userJobTitle = ''
	let userDescription = ''
	let userUrl = ''

	$: upperCaseName = name.toUpperCase();
	$: console.log(name)
	function incrementAge() {
		age += 1;
	}
	function changeName(){
		let name = 'max';
		
	}
	function nameInput(event){
		const enteredValue = event.target.value;
		name = enteredValue;
		console.log(event);
	}
	function userJobTitleInput(event){
		const test = event.target.value;
		userJobTitle = test;
		console.log(event);
	}
	function userDescriptionInput(event){
		const enteredValue = event.target.value;
		userDescription = enteredValue;
		console.log(event);
	}
	function userWebUrl(event){
		const enteredValue = event.target.value;
		userUrl = enteredValue;
		console.log(event);
	}
	

</script>

<style>
	body{
		background-color: grey;
	}
	h1 {
		color: purple;
	}
</style>
<body>
	<h1>Hello {upperCaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age</button>
<!-- <button on:click= "{upperCaseName}">Change name</button> -->
<input type="text" value ='{name}' placeholder="Name?"on:input= "{nameInput}">
<input type="text" value ='' placeholder="Job Title?" on:input= "{userJobTitleInput}">
<input type="text" value ='' placeholder="Description?" on:input= "{userDescriptionInput}">

<!-- <input type="text" bind:value = "{name}"> -->
<input type="text" placeholder="PictureWeburl?" bind:value = {userUrl}>

<ContactCard 
	userName= {name}
	jobTitle= {userJobTitle}
	desc= {userDescription}
	link = {userUrl}

/>
</body>

<!-- <input type="text" value ='' placeholder="PictureWeburl?" on:input= "{userWebUrl}"> -->
<!-- link = "https://media.licdn.com/dms/image/D4E35AQFwQ1aTMaXfMg/profile-framedphoto-shrink_400_400/0/1706419278346?e=1707318000&v=beta&t=d3af9k7J-HnTzWVn-z0M0e4JoUnQeTeGa6NtDM3cf8o" -->
<!-- link= "{userUrl}" -->

<!-- WARNING:  -->
<!-- <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt = 'reason' onload="alert('You were hacked!');"> -->