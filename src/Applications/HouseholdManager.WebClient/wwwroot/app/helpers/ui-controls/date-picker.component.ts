import {
	Component,
	AfterViewInit,
	OnDestroy,
	ViewChild,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	forwardRef
} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

declare var $: any;
declare var moment: any;

@Component({
	moduleId: module.id,
	selector: 'datepicker',
	templateUrl: 'date-picker.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => DatePickerComponent),
		multi: true
	}]
})

export class DatePickerComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
	@ViewChild('input') input: ElementRef;
	@Input() value: any = null;
	@Input() private format: string = 'dd.mm.yy';
	@Output() dateChange = new EventEmitter();

	private onTouchedCallback: () => void = noop;
	private onChangeCallback: (_: any) => void = noop;

	public writeValue(date: string) {
		this.value = date;
		$(this.input.nativeElement).datepicker('setDate', date ? new Date(date) : date);
	}

	public registerOnChange(fn: any) {
		this.onChangeCallback = fn;
	}

	public registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}

	ngAfterViewInit() {
		$(this.input.nativeElement).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: this.format,
			onSelect: () => {
				let date = $(this.input.nativeElement).datepicker('getDate');
				this.value = date;
				this.onChangeCallback(date);
				this.onTouchedCallback();
				this.dateChange.next(date);
			}
		})
			.datepicker('setDate', this.value);
	}

	ngOnDestroy() {
		$(this.input.nativeElement).datepicker('destroy');
	}
}