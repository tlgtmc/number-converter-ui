export class ApiRequest {
  number: string = '';
  inputNumberType: string = 'DECIMAL';
  outputNumberType: string = 'ROMAN';

  constructor(
    number: string,
    inputNumberType: string,
    outputNumberType: string
  ) {
    this.number = number;
    this.inputNumberType = inputNumberType;
    this.outputNumberType = outputNumberType;
  }
}
