<script lang="ts">
  export let value: string;
  export let double: boolean = false;
  export let triple: boolean = false;
  export let emphasis: boolean = false;
  export let operator: boolean = false;
  export let operation: boolean = false;
  
  export let getValues: (value: string) => void = () => {};
</script>

<button class="button" 
  class:double={double} 
  class:triple={triple} 
  class:emphasis={emphasis} 
  class:operator={operator} 
  class:operation={operation}
  on:click={() => getValues(value)}>
  {value}
</button>

<style>
  .button{
    flex-basis: 25%;
    margin: 0;
    border: 1px solid #555;
  }  

  .double{
    flex-basis: 50%;
  }

  .triple{
    flex-basis: 75%;
  }

  .emphasis{
    font-weight: bold;
    color: #ffffff;
    background-color: #dc3545;
  }

  .operator{
    font-weight: lighter;
    color: #a1a1a1;
    background-color: #f8f9fa;
  }

  .operation{
    color: #ffffff;
    background-color: #ffc107;
  }
</style>