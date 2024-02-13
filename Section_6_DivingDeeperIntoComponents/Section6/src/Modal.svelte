<script>
    import {createEventDispatcher, onMount , onDestroy, beforeUpdate , afterUpdate} from 'svelte';

    const dispatch = createEventDispatcher();
    const printLog = (halllo) => {console.log({halllo})}

    let agreed;
    let autoscroll = false
    
    

    onMount(printLog);
    onDestroy(printLog);
    beforeUpdate(() => {
        autoscroll = agreed;
        console.log(autoscroll)
    })
    afterUpdate(() => {
        if (autoscroll) {
            const modal = document.querySelector('.modal');
            modal.scrollTo(0, modal.scrollHeight)
        }
    });
    console.log(printLog);

</script>

<style>
.modalheader{
    border-bottom: 0.14rem solid;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  padding: 1rem;
  position: fixed;
  top: 10vh;
  left: 10%;
  width: 80%;
  max-height: 12vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: scroll;
  padding: 2rem;
}


</style>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" on:click="{() => dispatch('cancel')}"> wtf </div>

<div class="modal">

    <header class = 'modalheader'> 
        <slot name="header"/> 
    </header>
    
    <div class = 'content'> 
        <slot name = "content"/>
    </div>

    <div class = 'Disclaimer'>
        <p>Before closing you need you need to agree</p>
        <button on:click = {() => agreed = true}>Agree</button>

    </div>
    
    <footer>  

        <slot name = "footer" didAgreed = {agreed}>
            <button on:click={() => dispatch('close')} disabled ={!agreed}>CLOSE</button>
        </slot>  
         
    </footer>

    
    
    
</div>
