<script>
    import meetups from './meetups-store.js'
    import {createEventDispatcher} from 'svelte';
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from '../UI/Modal.svelte';
    import {isEmpty} from '../helpers/validation.js'
    import {isValidEmail} from '../helpers/validation.js'

    export let id = null;
    
     let title = '';
     let subtitle= '';
     let imageUrl= '';
     let description= '';
     let adress= '';
     let email= '';
     
     if (id) {
    const unsubscribe = meetups.subscribe(items => {
      const selectedMeetup = items.find(i => i.id === id);
      title = selectedMeetup.title;
      subtitle = selectedMeetup.subtitle;
      adress = selectedMeetup.adress;
      email = selectedMeetup.contactEmail;
      description = selectedMeetup.description;
      imageUrl = selectedMeetup.imageUrl;
    });

    unsubscribe();
  }

     let formIsvalid = false

    const dispatch = createEventDispatcher()
    $: titleValid = !isEmpty(title);
    $: subtitleValid = !isEmpty(subtitle);
    $: imageUrlValid = !isEmpty(imageUrl);
    $: desriptionValid = !isEmpty(description);
    $: adressValid = !isEmpty(adress);
    $: emailValid = isValidEmail(email);
    $: formIsvalid = titleValid && subtitleValid && imageUrlValid && desriptionValid && adressValid && emailValid; 
    
    function submitForm() {
      console.log('f in chat')
    const meetupData ={
    
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      adress:  adress,
    };
    

    if (id){
      meetups.updateMeetup(id, meetupData)
    } else {
      meetups.addMeetup(meetupData);
    }
    dispatch("save");
  
  }    
    function cancel(){
        dispatch('cancel')
    }

    function deleteMeetup () {
      meetups.removeMeetup(id);
      dispatch('save')
    };

</script>
<!-- -------------------------------------------------- -->
<style>
  form {
    width: 100%;
    max-width: 90%;
    margin: auto;
  }

</style>
<!-- -------------------------------------------------- -->
<Modal title = "EditMeetupData" on:cancel>
    <form on:submit|preventDefault="{submitForm}"> 
        <TextInput 
        id = 'title'

        valid = {titleValid}
        validityMessage = "Please enter a valid title"
        value = {title} 
        on:input= {event => (title = event.target.value)} />

        <TextInput 
        id = 'subtitle'
        valid = {subtitleValid}
        validityMessage = "Please enter a valid subtitle"
        value = {subtitle} 
        on:input= {event => (subtitle = event.target.value)} />

        <TextInput 
        id = 'adress'
        valid = {adressValid}
        validityMessage = "Please enter a valid address" 
        value = {adress} 
        on:input= {event => (adress = event.target.value)} />

        <TextInput 
        id = 'imageUrl'
        valid = {imageUrlValid}
        validityMessage = "Please enter a valid imageUrl"
        value = {imageUrl} 
        on:input= {event => (imageUrl = event.target.value)} />

        <TextInput 
        id = 'email'
        valid = {emailValid}
        validityMessage = "Please enter a valid email" 
        value = {email} 
        type = 'email'
        on:input= {event => (email = event.target.value)} />

        <TextInput 
        id = 'description'
        valid = {desriptionValid}
        validityMessage = "Please enter a valid description" 
        controlType = 'textarea'
        bind:value = {description}/>
</form>
<div slot = 'footer'>
    <Button type='button' mode = 'outline'on:click={cancel}>Cancel</Button>
    <Button type='button' disabled = {!formIsvalid} on:click={submitForm}>Submit</Button>
    {#if id}
    <Button type= 'button' on:click = {deleteMeetup}>Delete</Button>
    {/if}
</div>
</Modal>