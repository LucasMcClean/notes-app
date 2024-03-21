<script>
  import Note from './Note.svelte';

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
    grid-auto-rows: 50%;
    gap: 2rem;
    overflow-y: scroll;
  }
</style>

<div style="--position-left: {positionLeft}">
  <Note />
  <Note />
  <Note />
</div>