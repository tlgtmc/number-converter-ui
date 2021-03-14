import { Component } from '@angular/core';
import { ApiRequest } from 'src/model/api-request';
import { ApiResponse } from 'src/model/api-response';
import { NumberServiceService } from './number-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'number-converter-ui';

  constructor(private numberService: NumberServiceService) {}

  inputTypes: string[] = ['DECIMAL', 'BINARY'];

  apiRequest: ApiRequest = new ApiRequest('', 'DECIMAL', 'ROMAN');
  selectedInputType: string;

  numberValue: string;

  responseValue: ApiResponse = new ApiResponse('', '', 0);

  ngOnInit(): void {}

  onInputTypeSelection(entry): void {
    this.apiRequest.inputNumberType = entry;
    this.apiRequest.outputNumberType = 'ROMAN';
    console.log(this.apiRequest);
  }

  send() {
    console.log(this.apiRequest);
    this.numberService.sendRequest(this.apiRequest).subscribe(
      (response) => {
        this.responseValue = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
