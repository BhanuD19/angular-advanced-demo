import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { FaInputComponent } from './lib/fa-input/fa-input.component';

describe('AppComponent', () => {
    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        emailField: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, FaInputComponent, InputRefDirective,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));
    
    it('should create fa-input email element', async(() => {
        expect(emailField).toBeTruthy();
    }));
    
    it('should should include correct email icon inside the email input', async(() => {
        expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should project the correct test input inside the email field', async(() => {
        expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
    }));
});
