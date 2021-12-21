const NOT_CLEAR_SCREEN: boolean  = false;

export default class Calculator {
  #value: string;
  #accumulator: number;
  #clearScreen: boolean;
  #operation: string;

  constructor(value: string = null, 
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
    return this.#value?.replace('.', ',') || '0';
  }

  displayedValue(newValue: string) {
    return new Calculator((this.#clearScreen || !this.#value) ? newValue : this.#value, 
      this.#accumulator, 
      NOT_CLEAR_SCREEN, 
      this.#operation
    )
  }
}
