import { Pipe } from 'angular2/core';
@Pipe({ name: 'hyphenSeparator' })
export class hyphenSeparatorPipe {
    transform(value: any) {
        if (value) {
            return value.split('').join("-");
        }
        return value;
    }
}