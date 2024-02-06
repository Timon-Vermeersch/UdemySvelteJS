<script>
    export let userName;
    export let jobTitle;
    export let desc;
    export let link;


</script>

<style>
    .contact-card{
        box-shadow: 0 2px 8px rgba(0,0,0,0.70);
        max-width: 30rem;
        border-radius: 5px;
        margin: 1rem 0;
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7rem;
    }
    .thumb {
        
  width: 100%; /* Adjust this as necessary */
  height: 90%; /* Adjust this as necessary */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(92, 23, 23, 0.7);  
  
}
.thumb-placeholder{
    background: #cca;
}
.thumb img {
  
    
    object-fit: cover; /* The image will cover the area, may be cropped */
}

    .user-data {
        width: 67%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h1 {
        font-size: 1.25rem;
        font-family: "Roboto Slab", sans-serif;
        margin: 0.5rem 0;
    }

    h2 {
        font-size: 1rem;
        font-weight: normal;
        color: #5a5a5a;
        margin: 0;
        margin-bottom: 0.5rem;
    }

    .description {
        border-top: 1px solid #ccc;
        padding: 1rem;
    }

</style>

<div class="contact-card">
    <header>
      <div class=" {link ? 'thumb' : 'thumb thumb-placeholder'}  ">
        <img src="{link}" alt="" />
      </div>
      <div class="user-data">
        <h1>{userName}</h1>
        <h2>{jobTitle}</h2>
      </div>
    </header>
    <div class="description">
      <p>{@html desc}</p>
      
    </div>
  </div>