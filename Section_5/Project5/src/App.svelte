
<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
     let title = '';
     let subtitle= '';
     let imageUrl= '';
     let description= '';
     let adress= '';
     let email= '';
    let meetups = 
  [
    {
      id: 'm1',
      title: 'persona4r meetup' ,
      subtitle: 'Learn to play in 2 hours' ,
      description: 'In this meetup, we will have some experts like chie',
      imageUrl: 'https://atlus.com/wp-content/uploads/2022/03/persona4.jpg',
      contactEmail: 'code@test.com',
      adress: 'nerd Street 420, jeruzalem'
    },
    {
      id: 'm2',
      title: 'Persona5r meetup' ,
      subtitle: 'Learn to play in 2 hours' ,
      description: 'In this meetup, we will have some experts like Joker',
      imageUrl: 'https://www.spriters-resource.com/resources/sheets/126/129650.png?updated=1586993323',
      contactEmail: 'code@test.com',
      adress: 'Epic straat 6969, 9000 Belgium'
    }
  ];

  function addMeetup()
  {
    const newMeetup =
    {
      id: Math.random().toString(),
      
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      adress:  adress,
    }
    meetups = [newMeetup,...meetups ];
  }
</script>

<style>

  main
  {
    margin-top: 5rem;
  }
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>


  <Header />

  <main>
    <form on:submit|preventDefault="{addMeetup}"> 
      <TextInput 
        id = 'title'
        type = 'text' 
        value = {title} 
        on:input= {event => (title = event.target.value)} />

      <TextInput 
        id = 'subtitle' 
        type = 'text'
        value = {subtitle} 
        on:input= {event => (subtitle = event.target.value)} />

      <TextInput 
        id = 'adress' 
        type = 'text'
        value = {adress} 
        on:input= {event => (adress = event.target.value)} />

      <TextInput 
        id = 'imageUrl' 
        type = 'text'
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

      <Button type='submit' caption= "Save" />
    </form>
    <MeetupGrid {meetups}/>
  </main>




