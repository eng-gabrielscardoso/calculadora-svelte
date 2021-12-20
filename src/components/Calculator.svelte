<script>
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Row from "./Row.svelte";
</script>

<div class="calculator">
  <Display value="0"></Display>
  <Row>
    <Button text="AC" triple emphasis></Button>
    <Button text="/" operation></Button>
  </Row>
  <Row>
    <Button text="7" operator></Button>
    <Button text="8" operator></Button>
    <Button text="9" operator></Button>
    <Button text="X" operation></Button>
  </Row>
  <Row>
    <Button text="6" operator></Button>
    <Button text="5" operator></Button>
    <Button text="4" operator></Button>
    <Button text="+" operation></Button>
  </Row>
  <Row>
    <Button text="3" operator></Button>
    <Button text="2" operator></Button>
    <Button text="1" operator></Button>
    <Button text="-" operation></Button>
  </Row>
  <Row>
    <Button text="0" double operator></Button>
    <Button text="." operator></Button>
    <Button text="=" emphasis></Button>
  </Row>
</div>

<style>
  :root{
    --back-colour: #555;
  }
  
  .calculator{
    width: 150px;
    height: 220px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--back-colour);
  }
</style>