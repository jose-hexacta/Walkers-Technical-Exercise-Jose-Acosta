import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        ListItemComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should enable the submit button when number is between 1 - 200`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.maxNumber = 10;
    const compiled = fixture.nativeElement as HTMLElement;
    expect((compiled.querySelector('#send') as HTMLButtonElement )?.disabled).toBeFalsy();
  });

  it(`should render the right number of items `, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.maxNumber = 12;

    const compiled = fixture.nativeElement as HTMLElement;
    let button = fixture.debugElement.nativeElement.querySelector('#send');
    button.click();
    tick();
    fixture.detectChanges();
    expect((compiled.querySelectorAll('li').length)).toBe(12);
  }));

  it(`should render 'next20 button'`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.maxNumber = 40;

    const compiled = fixture.nativeElement as HTMLElement;
    let button = fixture.debugElement.nativeElement.querySelector('#send');
    button.click();
    tick();
    fixture.detectChanges();
    expect((compiled.querySelector('.next'))).toBeTruthy()
  }));

});
