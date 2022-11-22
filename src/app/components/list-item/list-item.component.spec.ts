import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render a walkers`, () => {
    const fixture = TestBed.createComponent(ListItemComponent);
    fixture.componentInstance.number = 3;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain("walkers")
  });

  it(`should render a walkers in green`, () => {
    const fixture = TestBed.createComponent(ListItemComponent);
    fixture.componentInstance.number = 3;
    fixture.detectChanges();
    
    const colorEl = fixture.debugElement.query(By.css(".walkers>span")).nativeElement;
    expect(getComputedStyle(colorEl).color).toEqual('rgb(0, 128, 0)');
  });

  it(`should render a assessment in red`, () => {
    const fixture = TestBed.createComponent(ListItemComponent);
    fixture.componentInstance.number = 5;
    fixture.detectChanges();
    
    const colorEl = fixture.debugElement.query(By.css(".assessment>span")).nativeElement;
    expect(getComputedStyle(colorEl).color).toEqual('rgb(255, 0, 0)');
  });

  it(`should render a assessment`, () => {
    const fixture = TestBed.createComponent(ListItemComponent);
    fixture.componentInstance.number = 5;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain("assessment")
  });


  it(`should render a walkers assessment`, () => {
    const fixture = TestBed.createComponent(ListItemComponent);
    fixture.componentInstance.number = 15;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain("walkers")
    expect(compiled.textContent).toContain("assessment")
  });
});
