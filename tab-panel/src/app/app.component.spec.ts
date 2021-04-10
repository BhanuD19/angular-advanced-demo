import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabContainerComponent } from './lib/tab-container/tab-container.component';
import { TabPanelComponent } from './lib/tab-panel/tab-panel.component';

describe('AppComponent', () => {
  
  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el: DebugElement,
      tabPanel: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, TabContainerComponent, TabPanelComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();
  });
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should find only one tab inside the tab container', () => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  });

  
  it('should find contact tab active', () => {
    const selectedButton = tabPanel.query(
      By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe(" Contact ");
  });

  
  it('should display the contacts tab', () => {
    const contactEmail = tabPanel.query(By.css('.contact-email'));
    expect(contactEmail).toBeTruthy();
  });

  it('should switch to login tab', () => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    tabButtons[0].nativeElement.click();

    fixture.detectChanges();

    const loginEmail = tabPanel.query(By.css('.login-email'));
    expect(loginEmail).toBeTruthy();

    const selectedButton = tabPanel.query(
      By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton.textContent).toBe(" login ")
  });


});
