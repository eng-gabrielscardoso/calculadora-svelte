<script lang="ts">
  import Calculator from "../models/Calculator";

  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Row from "./Row.svelte";

  let calc: any = new Calculator();
  let accumulatorClear: any = _ => calc = calc.accumulatorClear();
  let displayed: any = (n: string) => calc = calc.displayedValue(n);
  let displayedDot: any = _ => calc = calc.displayedDot();
  let operation: any = (op: string) => calc = calc.operation(op);
  let performOperation: any = _ => calc = calc.performOperation();
</script>

<div class="calculator">
  <Display value={calc.value}></Display>
  <Row>
    <Button value="AC" triple emphasis getValues={accumulatorClear}></Button>
    <Button value="/" operation getValues={operation}></Button>
  </Row>
  <Row>
    <Button value="7" operator getValues={displayed}></Button>
    <Button value="8" operator getValues={displayed}></Button>
    <Button value="9" operator getValues={displayed}></Button>
    <Button value="*" operation getValues={operation}></Button>
  </Row>
  <Row>
    <Button value="4" operator getValues={displayed}></Button>
    <Button value="5" operator getValues={displayed}></Button>
    <Button value="6" operator getValues={displayed}></Button>
    <Button value="+" operation getValues={operation}></Button>
  </Row>
  <Row>
    <Button value="1" operator getValues={displayed}></Button>
    <Button value="2" operator getValues={displayed}></Button>
    <Button value="3" operator getValues={displayed}></Button>
    <Button value="-" operation getValues={operation}></Button>
  </Row>
  <Row>
    <Button value="0" double operator getValues={displayed}></Button>
    <Button value="," operator getValues={displayedDot}></Button>
    <Button value="=" emphasis getValues={performOperation}></Button>
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