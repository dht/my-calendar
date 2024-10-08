import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarHours, CalendarHoursProps } from './CalendarHours';
import { BaseComponentDriver } from 'testing-base';

export class CalendarHoursDriver extends BaseComponentDriver {
    private props: Partial<CalendarHoursProps> = {};

    constructor() {
        super('CalendarHours');
    }

    when: any = {
        rendered: () => {
            render(<CalendarHours {...(this.props as CalendarHoursProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CalendarHours {...(this.props as CalendarHoursProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalendarHoursProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
