<script>
  export let title = "Note Title";
  export let content = "Note content...";

  let div;
  let resetTimeout;

  const onHover = () => {
    if (resetTimeout) clearTimeout(resetTimeout);
  }
  const onLeave = () => {
    resetTimeout = setTimeout(() => div.scrollTop = 0, 10000);
  }

</script>

<style>
  div {
    padding-block: 1rem;
    padding-inline: 1.5rem;
    border-radius: 10px;
    background: var(--clr-note);
    transition: .1s all;
    overflow-y: scroll;
  }
  div:hover {
    box-shadow: 0 0 3px var(--clr-pop), inset 0 0 2px var(--clr-pop);
  }
  #title {
    margin-bottom: .25rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--clr-text);
  }
  #content {
    color: var(--clr-text);
  }
</style>

<div 
  bind:this={div} 
  on:mouseenter={onHover} 
  on:mouseleave={onLeave} 
  role="document"
>
  <p id="title">{title}</p>
  <p id="content">{content}</p>
</div>