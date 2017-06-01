import { Directive, forwardRef, Attribute, Provider, ElementRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEmail]',
  providers : [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }]
})

export class EmailValidatorDirective implements Validator {
  constructor(@Attribute('validateEmail') private validateEmail: string,
    private element: ElementRef){
  }

  validate(control: AbstractControl): {[key:string]: any} {
      let v: string = control.value;
      let EMAIL_REGEXP: RegExp = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
          + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
      if (EMAIL_REGEXP.test(v)) {
          return null;
      } else {
          return {
              validateEmail: {
                  valid: false
              }
          }
      }
  }
}
