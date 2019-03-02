import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 *
 */
@Component({
  selector: 'custom-combobox',
  template: `
    <ul>
      <li *ngFor="let num of list" (click)="changeValue(num)" [style.background-color]="num === value ? 'yellow' : 'white'">
        {{ num }}
      </li>
    </ul>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboBoxComponent),
      multi: true,
    },
  ],
})
export class ComboBoxComponent implements ControlValueAccessor {
  /** 選択値 */
  value = 0;

  /** 表示リスト */
  @Input() items: any[] = [];

  /** */
  @Input() displayKey = '';

  /** */
  @Input() valueKey = '';

  /** */
  @Input() defaultDisplay = '-';

  /** */
  @Input() defaultValue: any;

  /** OnChange */
  private fnChange = (_: any) => {};

  /** OnTouched */
  private fnTouched = () => {};

  /**
   * ControlValueAccessor.writeValue
   * @param value
   */
  writeValue(value: any): void {
    this.value = value ? value : 0;
  }

  /**
   * ControlValueAccessor.registerOnChange
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.fnChange = fn;
  }

  /**
   * ControlValueAccessor.registerOnTouched
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.fnTouched = fn;
  }

  /**
   * ControlValueAccessor.setDisabledState
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean): void {}

  /**
   * 選択値変更処理
   * @param num
   */
  changeValue(num: number): void {
    this.value = num;
    this.fnChange(num);
  }
}
