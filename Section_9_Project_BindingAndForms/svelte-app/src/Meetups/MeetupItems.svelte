<script>
    import {createEventDispatcher} from 'svelte';
    import Button from "../UI/Button.svelte";
    import Badge from "../UI/badge.svelte"
    export let id;
    export let title;
    export let subtitle;
    export let imageUrl;
    export let description;
    export let adress;
    export let mail;
    export let isFav;

    const dispatch = createEventDispatcher();
</script>

<style>
    article {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      border-radius: 5px;
      background: rgba(211, 171, 171, 0.562);
      margin: 1rem;
    }
  
    header,
    .content,
    footer {
      padding: 1rem;
    }
  
    .image {
      width: 100%;
      height: 14rem;
    }
  
    .image img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  
    h1 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
      font-family: "Roboto Slab", sans-serif;
    }
  
    h1.is-favorite {
      background: #01a129;
      color: white;
      padding: 0 0.5rem;
      border-radius: 5px;
    }
  
    h2 {
      font-size: 1rem;
      color: #808080;
      margin: 0.5rem 0;
    }
  
    p {
      font-size: 1.25rem;
      margin: 0;
    }
  
    div {
      text-align: right;
    }
  </style>
  
  <article>
    <header>
      <h1>{title} 
        {#if isFav}
        <Badge> Kusje Van Jasper </Badge>
      {/if}
      
      </h1>
      <h2>{subtitle}</h2>
      <p>{adress}</p>
    </header>
    <div class="image">
      <img src="{imageUrl}" alt="{title}" />
    </div>
    <div class="content">
      <p>{description}</p>
    </div>
    <footer>
      
      <Button href = "mailto:{mail}">Contact</Button>
      
      
     <Button type='button' mode = 'outline'>Show details</Button>      
      
      
      <Button type='button' 
      mode = 'outline' 
      color = {isFav ? null : 'success'}
      on:click= {() => dispatch('togglefavorite', id)}>{isFav ? '♥': '♡'} </Button>
  
      
     
      
    </footer>
  </article>
  