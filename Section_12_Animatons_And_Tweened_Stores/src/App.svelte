<script>

import {writable} from "svelte/store";
import {tweened} from 'svelte/motion';
import {cubicIn} from 'svelte/easing';
import {fade , fly, slide ,scale} from 'svelte/transition';
import {flip} from 'svelte/animate';

import Spring from './Spring.svelte'

let boxInput;
let showParagraph = false
const progress = tweened(0 , {
    delay: 0,
    duration: 1000,
    easing: cubicIn,
    
});


setTimeout(() => {
    progress.set(0.9)}, 1500)

    let boxes = [];

function addBox() {
    if (boxInput.value === '') {
        return}
    boxes = [boxInput.value ,...boxes  ];
    boxInput.value = '';
}
function discard (value){
boxes = boxes.filter(el => el !== value);
}
</script>

<style>
    div {
        width: 10rem;
        height: 10rem;
        background-color: antiquewhite;
        margin: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.26) ;
        border-radius: 5px;
        padding: 1rem;
    }

</style>

<!-- <Spring/> -->
<!-- <progress value = '{$progress}'></progress> -->

<button on:click={ () => {showParagraph = !showParagraph}}>Toggle</button>


{#if showParagraph}
<p in:fade out:fly = {{x:300}}>Can you see me?</p>
{/if}

<hr>


<input type="text" bind:this={boxInput}>
<button on:click={addBox}>Add</button>


{#if showParagraph}
{#each boxes as box (box)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
    transition:fly|local={{x:300, y:300 }} 
    on:click={discard.bind(this,box)} 
    on:introstart={() => {console.log('addingstart')}}
    on:introend={() => {console.log('addingend')}}
    on:outrostart={() => {console.log('removingstart')}}
    on:outroend={() => {console.log('removingend')}}
    animate:flip={{duration:300}}
    
    >{box}</div>
{/each}
{/if}
