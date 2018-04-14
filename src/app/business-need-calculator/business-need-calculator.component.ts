import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-need-calculator',
  templateUrl: './business-need-calculator.component.html',
  styleUrls: ['./business-need-calculator.component.scss']
})
export class BusinessNeedCalculatorComponent implements OnInit {

  currentIndex = 0;
  progressPercentage = '0%';
  currentStepData: any;
  steps = [
    {
      step: 1,
      heading: 'What kind of business are you',
      sub_heading: 'Choose one of the below options',
      options: [
        { value: '1', icon: '', desc: 'Market Day' },
        { value: '2', icon: '', desc: 'Small business owner' },
        { value: '3', icon: '', desc: 'Retail' },
        { value: '4', icon: '', desc: 'Fast food and restarant' },
        { value: '5', icon: '', desc: 'Travel and intertainment' },
        { value: '6', icon: '', desc: 'Online business' },
        { value: '7', icon: '', desc: 'Door-to-door business' },
        { value: '8', icon: '', desc: 'Collection & debit orders' }
      ],
      selected_option: ''
    },
    {
      step: 2,
      heading: 'Where do your customers pay you?',
      sub_heading: 'Choose one of the below options',
      options: [
        { value: '1', icon: '', desc: 'I go where my customer go' },
        { value: '2', icon: '', desc: 'At a fixed till a pay point' },
        { value: '3', icon: '', desc: 'At a self service pay point' },
        { value: '4', icon: '', desc: 'I send my customers an invoice' }
      ],
      selected_option: ''
    },
    {
      step: 3,
      heading: 'Do you need an integrated solution?',
      sub_heading: 'Choose one of the below options',
      options: [
        { value: '1', icon: '', desc: 'Yes, please' },
        { value: '2', icon: '', desc: 'No, thanks' }
      ],
      selected_option: ''
    }
  ];


  constructor() { }

  ngOnInit() {
    this.currentStepData = this.steps[this.currentIndex];
  }

  selectStepOption(optionValue) {
    this.currentStepData.selected_option = optionValue;
  }

  prevStep() {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < this.steps.length && this.currentIndex >= 0) {
      this.currentStepData = this.steps[this.currentIndex];
    } else {
      this.currentIndex = 0;
    }
    this.calculateProgressPercentage();
  }

  nextStep() {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex < this.steps.length && this.currentIndex > 0) {
      this.currentStepData = this.steps[this.currentIndex];
    } else {
      this.currentIndex = this.steps.length - 1;
    }
    this.calculateProgressPercentage();
  }

  calculateProgressPercentage() {
    const totalSteps = this.steps.length;
    const currentStep = this.currentIndex;
    const percentage = (currentStep / totalSteps) * 100;
    this.progressPercentage = `${percentage}%`;
  }
}
