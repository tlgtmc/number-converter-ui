export class ApiResponse {
  value: string;
  httpStatus: string;
  httpStatusCode: number;

  constructor(value: string, httpStatus: string, httpStatusCode: number) {
    this.value = value;
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
  }
}
