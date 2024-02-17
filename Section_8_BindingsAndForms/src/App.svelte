<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";
  import {isValidEmail} from "./validation.js";
  let val = "Max";
  let price = 0;
  let selectedOption = 1;
  let agreed;
  let userNameInput = ''
  let someDiv
  let customInput
  let enterEmail = ''
  let formIsvalid = false;
//   let favColor = 'green';
  let favColor = ['green'];
  let dropDownColor = ''

  $: console.log(val);
  $: console.log(selectedOption);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(dropDownColor);

$: if (isValidEmail(enterEmail)){
     formIsvalid = true;
   }else {
      formIsvalid = false;
    }

function setaValue(event) {
    val = event.target.value;
  }
function saveData(){
  // console.log(document.querySelector('#username').value);
  console.log(userNameInput.value);
  console.log(userNameInput);
  console.log(someDiv);
  console.log(customInput);
  customInput.empty();
  
}

</script>

<style>

 .invalid
  {border: 1px solid red;}

</style>
<!-- <input type="text" value={val} on:input={setValue}> -->
<!-- <input type="text" bind:value={val} /> -->
<CustomInput bind:val bind:this={customInput} />

<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label ><input type="checkbox" bind:checked={agreed} />
  Agree to terms?</label>



<!-- Replace "checkbox" with "radio" and update the "favColor" variable above to see the radio example -->
<h1>Favorite Color?</h1>
<label>
    <input type="checkbox" name="color" value="red" bind:group={favColor}>
    Red
</label>
<label>
    <input type="checkbox" name="color" value="green" bind:group={favColor}>
    Green
</label>
<label>
    <input type="checkbox" name="color" value="blue" bind:group={favColor}>
    Blue
</label>


<select name="" bind:value={dropDownColor}>
  
<option value="red">Red</option>
<option value="green">Green</option>
<option value="blue">Blue</option>

</select>

<hr>

<input type="text" id = 'dicks' bind:this = {userNameInput}>
<button on:click={saveData}>SAVE</button>
<div bind:this="{someDiv}"></div>

<hr>

<form on:submit|preventDefault>


  <input  class ="{isValidEmail(enterEmail) ? "": 'invalid'}"type="email" bind:value={enterEmail}>
  <button type="submit" disabled = {!formIsvalid}>Save</button>

</form>