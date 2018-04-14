import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-vm-detail',
  template: '<p>Mock Product Settings Component</p>'
})
class MockVmDetailComponent {
  @Input()
  data: any;
}

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      MockVmDetailComponent,
    ],
    providers: [/* your providers */]
  });
});

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
