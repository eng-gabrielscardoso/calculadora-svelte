const CLEAR_SCREEN: boolean = true;
const NOT_CLEAR_SCREEN: boolean  = false;

export default class Calculator {
  #value: string;
  #accumulator: number;
  #clearScreen: boolean;
  #operation: string;

  constructor(
    value: string = null, 
    accumulator: number = null, 
    clearScreen: boolean = false, 
    operation: string = null
  ) {
    this.#value = value;
    this.#accumulator = accumulator;
    this.#clearScreen = clearScreen;
    this.#operation = operation;
  }

  get value(): string{
    return this.#value?.replace(',', '.') || '0';
  }
  
  displayedValue(newValue: string): Calculator {
    return new Calculator(
      (this.#clearScreen || !this.#value) ? newValue : this.#value + newValue, 
      this.#accumulator, 
      NOT_CLEAR_SCREEN, 
      this.#operation
      );
    }
    
    displayedDot(): Calculator {
      return new Calculator(
        this.#value?.includes('.') ? this.#value : this.#value + '.', 
        this.#accumulator, 
        NOT_CLEAR_SCREEN, 
        this.#operation
        );
      }
    
    accumulatorClear(): Calculator{
      return new Calculator();
    }

    operation(nextOperation: string) {
      return this.performOperation(nextOperation);
    }

    performOperation(nextOperation: string = null) {
      const accumulator: any = !this.#operation 
        ? parseFloat(this.#value)
        : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);

      const value: string = !this.operation 
        ? this.#value
        : `${accumulator}`;

        return new Calculator(
          value, 
          accumulator,
          nextOperation ? CLEAR_SCREEN : NOT_CLEAR_SCREEN,
          nextOperation
        )
    }
}
