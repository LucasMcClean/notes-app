<script>
  import Sidebar from './lib/Sidebar.svelte';
  import NoteContainer from './lib/NoteContainer.svelte';

  let noteContainer;

  const sidebarPosition = "20vw";
</script>

<main>
  <Sidebar sidebarWidth={sidebarPosition} on:noteSubmission={(note) => noteContainer.addNote(note)} />
  <NoteContainer bind:this={noteContainer} positionLeft={sidebarPosition} />
</main>

<style>
  main {
    height: 100%;
    width: 100%;
  }
</style>
