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

  inputTypes: string[];
  outputTypes: string[];

  apiRequest: ApiRequest = new ApiRequest();
  selectedInputType: string;

  numberValue: string;

  responseValue: ApiResponse = new ApiResponse('', '', 0);

  ngOnInit(): void {
    this.fetchInputTypes();
    this.fetchOutputTypes();
  }

  fetchInputTypes() {
    this.numberService.getInputTypes().subscribe(
      (response) => {
        console.log('Input types are fetched from back-end');
        console.log(response);
        this.inputTypes = response;
      },
      (error) => {
        console.log(error);
        this.inputTypes = ['DECIMAL', 'BINARY'];
      }
    );
  }

  fetchOutputTypes() {
    this.numberService.getOutputTypes().subscribe(
      (response) => {
        console.log('Output types are fetched from back-end');
        console.log(response);
        this.outputTypes = response;
      },
      (error) => {
        console.log(error);
        this.outputTypes = ['ROMAN'];
      }
    );
  }

  onInputTypeSelection(entry): void {
    this.apiRequest.inputNumberType = entry;
    //this.apiRequest.outputNumberType = 'ROMAN';
    console.log(this.apiRequest);
  }

  onOutputTypeSelection(entry): void {
    this.apiRequest.outputNumberType = entry;
    console.log(this.apiRequest);
  }

  send() {
    if (this.numberValue === '' && this.numberValue.length === 0) {
      return;
    }
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
