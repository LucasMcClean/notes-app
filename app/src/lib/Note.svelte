<script>
  export let title = "Note Title";
  export let content = "Note content...";
</script>

<style>
  div {
    background: var(--clr-note);
  }
  #title {
    margin-bottom: .2rem;
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--clr-text);
  }
  #content {
    color: var(--clr-text);
  }
</style>

<div>
  <p id="title">{title}</p>
  <p id="content">{content}</p>
</div>