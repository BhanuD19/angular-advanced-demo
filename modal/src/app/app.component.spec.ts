import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FaInputModule} from 'fa-input';
import { TabPanelModule} from 'tab-panel';
import { ModalModule } from './modal/modal.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  
  let component: AppComponent,
  fixture: ComponentFixture<AppComponent>,
  el: DebugElement,
  modal: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      // imports: [
      //   FaInputModule,
      //   TabPanelModule,
      //   ModalModule.forRoot()
      // ]
    }).compileComponents();
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el= fixture.debugElement;
    modal = el.query(By.css('#testModal'));
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it('should open the modal when test button is clicked', () => {
  //   fixture.nativeElement.querySelector('#testModalButton').click();
  //   fixture.detectChanges();
  //   const openModal = fixture.nativeElement.querySelector('#testModal');
  //   expect(openModal).toBeTruthy();
  // });

});
