<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let titleIn;
  let contentIn;

  async function submitNote() {
    const title = titleIn.value;
    const content = contentIn.value;
    const res = await fetch('http://localhost:3000/api/notes', 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content
      })
    });
    const newNote = await res.json();
    dispatch("noteSubmission", newNote);
    titleIn.value = "";
    contentIn.value = "";
  }
  export let sidebarWidth = "15vw";
</script>

<style>
  div {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: var(--sidebar-width);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--clr-sidebar);
    font-size: 1.1rem;
  }
  .input {
    outline: 0;
    width: 100%;
    padding: .3rem;
    border-radius: 7px;
    color: var(--clr-text);
    background: var(--clr-background);
  }
  .input:focus {
    box-shadow: 0 0 3px var(--clr-text), inset 0 0 2px var(--clr-text);
  }
  input {
    font-weight: bold;
  }
  textarea {
    height: 40vh;
    resize: none;
  }
  button {
    height: 2.5rem;
    border: 2px solid var(--clr-sidebar);
    border-radius: 20px;
    font-weight: bold;
    color: var(--clr-text);
    background: var(--clr-background);
    transition: all .2s;
  }
  button:hover {
    border: 2px solid var(--clr-pop);
    color: var(--clr-background);
    background: var(--clr-pop);
  }
</style>

<div style="--sidebar-width: {sidebarWidth}">
  <input bind:this={titleIn} class="input" placeholder="Title"/>
  <textarea bind:this={contentIn} class="input" placeholder="Content..."></textarea>
  <button on:click={submitNote}>Add Note</button>
</div>