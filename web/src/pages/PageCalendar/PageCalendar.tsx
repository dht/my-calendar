import React from 'react';
import { H1, Wrapper } from './PageCalendar.style';
import Calendar from '../../components/Calendar/Calendar';

export type PageCalendarProps = {};

export function PageCalendar(_props: PageCalendarProps) {
  return (
    <Wrapper className='PageCalendar-wrapper' data-testid='PageCalendar-wrapper'>
      <H1>My Calendar</H1>
      <Calendar />
    </Wrapper>
  );
}

export default PageCalendar;
