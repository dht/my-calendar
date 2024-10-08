import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalendarContent, CalendarContentProps } from './CalendarContent';
import { BaseComponentDriver } from 'testing-base';

export class CalendarContentDriver extends BaseComponentDriver {
    private props: Partial<CalendarContentProps> = {};

    constructor() {
        super('CalendarContent');
    }

    when: any = {
        rendered: () => {
            render(<CalendarContent {...(this.props as CalendarContentProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CalendarContent {...(this.props as CalendarContentProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CalendarContentProps>) => {
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
