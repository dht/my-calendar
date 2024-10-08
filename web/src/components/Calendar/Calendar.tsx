import React, { useMemo } from 'react';
import { Wrapper } from './Calendar.style';
import CalendarHours from './_parts/CalendarHours/CalendarHours';
import CalendarContent from './_parts/CalendarContent/CalendarContent';
import { positionMeetings } from './_parts/CalendarContent/CalendarContent.utils';
import { meetings } from './_parts/CalendarContent/CalendarContent.data';

export type CalendarProps = {};

export function Calendar(_props: CalendarProps) {
  const meetingsPositioned = useMemo(() => {
    return positionMeetings(meetings);
  }, [meetings]);

  return (
    <Wrapper className='Calendar-wrapper' data-testid='Calendar-wrapper'>
      <CalendarHours />
      <CalendarContent meetings={meetingsPositioned} />
    </Wrapper>
  );
}

export default Calendar;
