<script>
    export let controlType = null;
    export let id;
    let idButCapitalised = id.charAt(0).toUpperCase() + id.slice(1);
    export let rows = null;
    export let value;
    export let type = 'text';
    export let valid = true;
    export let validityMessage = '';

    let touched = false;
</script>

<style>
    input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 3px 3px 0 0;
  background: white;
  padding: 0.15rem 0.25rem;
  transition: border-color 0.1s ease-out;
}

input:focus,
textarea:focus {
  border-color: #e40763;
  outline: none;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
}

.form-control {
  padding: 0.5rem 0;
  width: 100%;
  margin: 0.25rem 0;
}
.invalid {
  border-color: red;
  background: rgb(235, 188, 188);
}

.error-message{
  color: red;
  margin: 0.25 0;
}



</style>

<div class = 'form-control'>
    <label for="{id}">{idButCapitalised}</label>
{#if controlType === 'textarea'}
    <textarea class:invalid="{!valid && touched}"rows='{rows}' id="{id}" bind:value  on:input on:blur={() => touched = true}/>
      {:else}
      <!--                                                  bind:value is easier than value = {value} and can be used only because it doesnt have a type -->
    <input class:invalid="{!valid && touched}" type="{type}" id='{id}' value = {value} on:input on:blur={() => touched = true}/> 
{/if}
{#if validityMessage && !valid && touched}
  <p class = "error-message">{validityMessage}</p>
{/if}

</div>