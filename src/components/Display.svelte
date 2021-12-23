<script lang="ts">
  export let value: string;

  $: fontSize = value.length >= 17 ? 'short' : `s-${value.length}`;
</script>

<div class={`display ${fontSize}`}>
  <span>{value}</span>
</div>

<style>
  .display{
    display: flex;
    flex: 1;
    justify-content: end;
    align-items: center;
    margin-bottom: 5px;
    padding: 0 5px;
    background-color: #444;
    font-size: 1.5rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow-x: hidden;
  }

  .s-10 { font-size: 1.4rem; }
  .s-11 { font-size: 1.35rem; }
  .s-12 { font-size: 1.2rem; }
  .s-13 { font-size: 1.1rem; }
  .s-14 { font-size: 1rem; }
  .s-15 { font-size: 0.9rem; }
  .s-16 { font-size: 0.8rem; }
  .short { font-size: 0.7rem; }
</style>