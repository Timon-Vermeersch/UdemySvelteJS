<script>
  import { createEventDispatcher,onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import MeetupItem from "../components/MeetupItem.svelte";
  import MeetupFilter from "../components/Meetups/MeetupFilter.svelte"
  import Button from "../components/UI/Button.svelte";
  import EditMeetup from "../components/Meetups/EditMeetup.svelte";
  import LoadingSpinner from "../components/UI/LoadingSpinner.svelte"
  
  
  let meetups = [];


  let editMode;
  let editedId;
  let isLoading = true;
  
  onMount(() => {
    fetch("https://svelte-course-981bc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("Fetching meetups failed, please try again later!");
      }
      return res.json();
    })
    .then(data => {
      const loadedMeetups = [];
      for (const key in data) {
        loadedMeetups.push({
          ...data[key],
          id: key
        });
      }
      setTimeout(() => {
        isLoading = false;
        meetups.setMeetups(loadedMeetups.reverse());
      }, 1000);
    })
    .catch(err => {
      error = err;
      isLoading = false;
      console.log(err);
    });
  })
  
  
  const dispatch = createEventDispatcher();

  let favsOnly = false;

  $: filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups;

  function setFilter(event) {
    favsOnly = event.detail === 1;
  }

  function savedMeetup(event) {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }



</script>

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #meetup-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  #no-meetups {
    margin: 1rem;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<svelte:head>
	<title>All Meetups</title>
</svelte:head>

{#if editMode === 'edit'}
      <EditMeetup id={editedId} on:save={savedMeetup} on:cancel={cancelEdit} />
    {/if}
    {#if isLoading}
      <LoadingSpinner />
    {:else}
      <section id="meetup-controls">
        <MeetupFilter on:select={setFilter} />
        <Button on:click={() => dispatch('add')}>New Meetup</Button>
      </section>
      {#if filteredMeetups.length === 0}
        <p id="no-meetups">No meetups found, you can start adding some.</p>
      {/if}
      <section id="meetups">
        {#each filteredMeetups as meetup (meetup.id)}
          <div transition:scale animate:flip={{ duration: 300 }}>
            <MeetupItem
              id={meetup.id}
              title={meetup.title}
              subtitle={meetup.subtitle}
              description={meetup.description}
              imageUrl={meetup.imageUrl}
              email={meetup.contactEmail}
              address={meetup.address}
              isFav={meetup.isFavorite}
              on:showdetails
              on:edit />
          </div>
        {/each}
      </section>
    
    {/if}

