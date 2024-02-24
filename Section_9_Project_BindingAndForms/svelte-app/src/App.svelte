
<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";


    let meetups = 
  [
    {
      id: 'm1',
      title: 'Persona4r meetup' ,
      subtitle: 'Learn to play in 2 hours' ,
      description: 'In this meetup, we will have some experts like chie',
      imageUrl: 'https://i.redd.it/185xihbktbn21.jpg',
      contactEmail: 'code@test.com',
      adress: 'Nerd Street 420, 9696 Jeruzalem',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Persona5r meetup' ,
      subtitle: 'Learn to play in 4 hours' ,
      description: 'In this meetup, we will have some experts like Joker',
      imageUrl: 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000',
      contactEmail: 'code@test.com',
      adress: 'Epic Straat 6969, 9000 Belgium',
      isFavorite: false
    }
  ];

let editMode = 'x';

  function addMeetup(event)
  {
    console.log('FUCK MIJN LEVEN')
    const newMeetup =
    {
      id: Math.random().toString(),
      
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      contactEmail: event.detail.email,
      adress:  event.detail.adress,
    }
    meetups = [newMeetup,...meetups ];
  }

  function help (event)
  {
    title = event.target.value
    console.log('HASWEJIFHDSEYUIFHSYHEFHISEFHUJISEF')
    console.log(event)

  }

  function toggleFavorite(event) 
  {
    const id = event.detail;
    const updateMeetup = {...meetups.find(m => m.id === id)};
    updateMeetup.isFavorite = !updateMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id ===id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updateMeetup;
    meetups = updatedMeetups;
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
          <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
  </main>




