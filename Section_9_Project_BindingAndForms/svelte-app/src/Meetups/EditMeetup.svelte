<script>
    import {createEventDispatcher} from 'svelte';
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from '../UI/Modal.svelte';

    let title = '';
     let subtitle= '';
     let imageUrl= '';
     let description= '';
     let adress= '';
     let email= '';

    const dispatch = createEventDispatcher()
 
    function submitForm()
    {dispatch("save" , 
        {
        title: title,
        subtitle:subtitle,
        imageUrl:imageUrl,
        description:description,
        adress:adress,
        email:email,

       });
  }    
    function cancel(){
        dispatch('cancel')
    }
</script>


<style>
  form {
    width: 100%;
    max-width: 90%;
    margin: auto;
  }

</style>



<Modal title = "EditMeetupData" on:cancel>
    <form on:submit|preventDefault="{submitForm}"> 
        <TextInput 
        id = 'title'
        value = {title} 
        on:input= {event => (title = event.target.value)} />

        <TextInput 
        id = 'subtitle' 
        value = {subtitle} 
        on:input= {event => (subtitle = event.target.value)} />

        <TextInput 
        id = 'adress' 
        value = {adress} 
        on:input= {event => (adress = event.target.value)} />

        <TextInput 
        id = 'imageUrl' 
        value = {imageUrl} 
        on:input= {event => (imageUrl = event.target.value)} />

        <TextInput 
        id = 'email' 
        value = {email} 
        type = 'email'
        on:input= {event => (email = event.target.value)} />

        <TextInput 
        id = 'description' 
        controlType = 'textarea'
        value = {description} 
        on:input= {event => (description = event.target.value)} />
</form>
<div slot = 'footer'>
    <Button type='button' mode = 'outline'on:click={cancel}>Cancel</Button>
    <Button type='button' on:click={submitForm}>Submit</Button>
</div>
</Modal>