import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PageCalendar, PageCalendarProps } from './PageCalendar';
import { BaseComponentDriver } from 'testing-base';

export class PageCalendarDriver extends BaseComponentDriver {
    private props: Partial<PageCalendarProps> = {};

    constructor() {
        super('PageCalendar');
    }

    when: any = {
        rendered: () => {
            render(<PageCalendar {...(this.props as PageCalendarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PageCalendar {...(this.props as PageCalendarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PageCalendarProps>) => {
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
