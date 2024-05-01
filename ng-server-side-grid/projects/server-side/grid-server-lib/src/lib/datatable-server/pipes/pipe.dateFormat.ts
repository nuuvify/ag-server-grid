import { DatePipe } from "@angular/common";
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

export const isDate = (value: string) => {
  const regexData = /^\d{4}-\d{2}-\d{2}$/;
  const regexDataIso = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  if (typeof value === 'string' && (regexData.test(value) || regexDataIso.test(value))) {
    return true;
  } else {
    return false;
  }
};

@Pipe({
  name: "dateOrString",
  standalone: true
})
export class DateOrStringPipe extends DatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) locale: string, private datePipe: DatePipe) {
    super(locale);
  }

  override transform(
    value: any,
  ): any {
    return isDate(value)
      ? this.datePipe.transform(value, 'dd/MM/yyyy')
      : value;
  }
}
