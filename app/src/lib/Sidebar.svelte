<script>
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
  }
  .input {
    outline: 0;
    width: 100%;
    padding: .3rem;
    border-radius: 7px;
    color: var(--clr-sidebar);
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
</style>

<div style="--sidebar-width: {sidebarWidth}">
  <input class="input" placeholder="Title"/>
  <textarea class="input" placeholder="Content..."></textarea>
  <button>Add Note</button>
</div>