import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRequest } from 'src/model/api-request';
import { ApiResponse } from 'src/model/api-response';
import { HttpParams } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root',
})
export class NumberServiceService {
  private URL_HOST = 'http://localhost:7101';
  private URL_CONVERSION = this.URL_HOST + '/convert/to/roman';
  private URL_INPUT_TYPES = this.URL_HOST + '/config/inputTypes';
  private URL_OUTPUT_TYPES = this.URL_HOST + '/config/outputTypes';

  constructor(private httpClient: HttpClient) {}

  sendRequest(apiRequest: ApiRequest): Observable<ApiResponse> {
    var url =
      this.URL_CONVERSION +
      '?number=' +
      apiRequest.number +
      '&inputNumberType=' +
      apiRequest.inputNumberType +
      '&outputNumberType=' +
      apiRequest.outputNumberType;
    return this.httpClient.get<ApiResponse>(url);
  }

  getInputTypes(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.URL_INPUT_TYPES);
  }

  getOutputTypes(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.URL_OUTPUT_TYPES);
  }
}
