
<script>
  import meetups from "./Meetups/meetups-store.js";
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  


//     let meetups = 
// ;

let editMode = 'x';
$:  loadedMeetups = meetups;


  function addMeetup(event)
  {
;
}

  function help (event)
  {
    title = event.target.value
    console.log('HASWEJIFHDSEYUIFHSYHEFHISEFHUJISEF')
    console.log(event)

  }

  
  function handleClick() {
    if (editMode === 'x') {
      editMode = 'add';
    } else {
      editMode = 'x';
    }
  }

  function cancelEdit (){
        editMode = null;
    } 
</script>

<style>

  main
  {
    margin-top: 5rem;
  }
  .meetup-controls
  {
    margin: 1rem;
    padding-top: 1rem;
  }

</style>


  <Header />

  <main>
        <div class="meetup-controls">

          <Button on:click={handleClick}>New Meetup</Button>
          
      </div>
          
      {#if editMode === 'add'}
            <EditMeetup on:save="{addMeetup}" on:cancel={cancelEdit}/>
          {/if}
          <MeetupGrid meetups={$loadedMeetups}  />
  </main>




