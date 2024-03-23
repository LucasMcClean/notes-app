<script>
  import Note from './Note.svelte';
  import { onMount } from 'svelte';

  let notes = [];

  onMount(updateNotes);

  async function updateNotes() {
    const res = await fetch('http://localhost:3000/api/notes');
    notes = await res.json();
  }

  async function deleteNote(noteId) {
    await fetch(`http://localhost:3000/api/notes/${noteId}`, 
    {
      method: "DELETE",
    });
    updateNotes();
  }

  export function addNote(note) {
    notes = [note.detail, ...notes];
  }

  export let positionLeft = "15vw";
</script>

<style>
  div {
    position: fixed;
    left: var(--position-left);
    height: 100%;
    width: calc(100% - var(--position-left));
    padding-block: 1rem;
    padding-inline: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min(400px, 40vh);
    gap: 2rem;
    overflow-y: scroll;
  }
</style>

<div style="--position-left: {positionLeft}">
  {#each notes as note}
    <Note title={note.title} content={note.content} id={note.id} on:requestDelete={(e) => deleteNote(e.detail.noteId)} />
  {/each}
</div>