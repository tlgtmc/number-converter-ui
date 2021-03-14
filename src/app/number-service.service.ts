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
  private URL = 'http://localhost:7101/convert/to/roman';

  constructor(private httpClient: HttpClient) {}

  sendRequest(apiRequest: ApiRequest): Observable<ApiResponse> {
    var url =
      this.URL +
      '?number=' +
      apiRequest.number +
      '&inputNumberType=' +
      apiRequest.inputNumberType +
      '&outputNumberType=' +
      apiRequest.outputNumberType;
    return this.httpClient.get<ApiResponse>(url);
  }
}

export function toParamMap(...properties): HttpParams {
  let httpParams = new HttpParams();
  properties.forEach((p) => {
    if (p) {
      Object.keys(p).forEach((key) => {
        if (!isNullOrUndefined(p[key]) && p[key] !== '') {
          if (p[key] instanceof Date) {
            httpParams = httpParams.set(key, p[key].toISOString());
          } else if (p[key] instanceof Array) {
            p[key].forEach((element) => {
              if (element) {
                httpParams = httpParams.append(key, element);
              }
            });
          } else {
            httpParams = httpParams.set(key, p[key]);
          }
        }
      });
    }
  });

  return httpParams;
}
