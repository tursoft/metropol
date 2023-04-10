import { Component, EventEmitter, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-base-component',
    template: ''
})
export abstract class BaseComponent implements OnDestroy {
    subscriptions: Subscription[] = [];
    private propValues: { [key: string]: any } = {};

    constructor() {
    }

    setProperty<T>(name: string, value: T, event?: EventEmitter<T>) {
        if (this.propValues[name] != value) {
            this.propValues[name] = value;
            event?.next(value);
            this.onPropertyChanged(name, value);
        }
    }

    getProperty<T>(name: string, defaultValue: T): T {
        let value = this.propValues[name];
        if (value == null || value == undefined) {
            value = defaultValue;
        }

        return value;
    }

    onPropertyChanged(name: string, value: any) {
    }

    ngOnDestroy(): void {
        for(const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
}