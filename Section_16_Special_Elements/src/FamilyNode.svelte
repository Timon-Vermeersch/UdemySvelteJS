<script context = "module">
    console.log('Runs once!')
    let deactivateNode;

</script>

<script>
    export let member;
    console.log("Runs multiple times")
    let isActive;
    function deactivate(){
        isActive = false;
    }
    function activate(){
        if (deactivateNode){
            deactivateNode();
        }
            isActive = true;
            deactivateNode = deactivate;
    }
</script>

<style>
    div{
        margin: 0.5rem;
        margin-left: 0;
        padding: 0.5rem;
        border-radius: 1rem;
        border: solid;
        border-color: rgb(88, 88, 88);
    }

    .active{
        color: red;
    }
</style>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div  class:active = {isActive} on:click= {activate}>
    <h1>{member.name}</h1>
    {#if member.isParent}
    <ul>
        {#each member.children as child}
            <svelte:self member = {child}/>
        {/each}
    </ul>
    {/if}
</div>