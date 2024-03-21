<script>
  import Sidebar from './lib/Sidebar.svelte';
  import NoteContainer from './lib/NoteContainer.svelte';

  const sidebarPosition = "17vw";
</script>

<main>
  <Sidebar sidebarWidth={sidebarPosition} />
  <NoteContainer positionLeft={sidebarPosition}/>
</main>

<style>
  main {
    height: 100%;
    width: 100%;
  }
</style>
