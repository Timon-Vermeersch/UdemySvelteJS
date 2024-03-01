<script>

import {onMount} from 'svelte';
import {hobbyStore} from './hobby-store.js';


let hobbies = [];
let hobbyInput;
let isLoading = false

onMount(() => 
    
{   isLoading = true;
    fetch('https://svelte-course-981bc-default-rtdb.europe-west1.firebasedatabase.app/hobbies.json')
.then(res => {
    if (!res.ok) {
        throw new Error('failed')
    }
    return res.json();
})
.then(data => {
        isLoading = false;
    // hobbies = Object.values(data);
    hobbyStore.setHobbies(Object.values(data))
    let keys = Object.keys(data);
    console.log(keys);

    for (const key in data) {
        console.log(key, data[key]);
    }
})
.catch(err=> {
    isLoading = false;
    console.log(err);
});
})

function addHobby(){
    // hobbies = [...hobbies , hobbyInput.value];
    hobbyStore.addHobby(hobbyInput.value);

    isLoading = true;
    fetch('https://svelte-course-981bc-default-rtdb.europe-west1.firebasedatabase.app/hobbies.json' , {
    method:'POST',
    body: JSON.stringify(hobbyInput.value),
    headers: {
        'Content-Type': 'application/json'
    }
    
  }).then(res =>{
        isLoading = false;
    if (!res.ok) {
        throw new Error('failed')
    }
    //...
    alert('savedData');
    // res.json() => promise with an object that contains the id
  }).catch(err => {
    isLoading = false;
    console.log(err)});
}


</script>

<label for="hobby">Hobby</label>
<input type="text" bind:this={hobbyInput}/>
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading }
    <p>...Loading</p>
{:else}
    <ul>
        {#each $hobbyStore as hobby}
        <li>{hobby}</li>
        {/each}
    </ul>
{/if}





<!-- gethobbies = fetch("apilink")
    return hobbies
    so getHobbies gets populated
-----------------------------------------
{#await getHobbies}
<p>..Loading</p>
{:then hobbyData}
    <ul>
        {#each hobbyData as hobby}
            <li>{hobby}</li>
        {/each}
    </ul>
    {:catch error}
    <p>{error.message}</p>
    {/await}
-->
