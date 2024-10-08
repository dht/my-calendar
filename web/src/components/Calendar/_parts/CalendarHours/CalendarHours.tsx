import React from 'react';
import { Hour, Wrapper } from './CalendarHours.style';
import { data, HourRow, rows } from './CalendarHours.data';

export type CalendarHoursProps = {};

export function CalendarHours(_props: CalendarHoursProps) {
  function renderHour(hour: HourRow) {
    return (
      <Hour key={hour.id} className=''>
        {hour.start}
      </Hour>
    );
  }

  function renderHours() {
    return rows.map((hour: HourRow) => renderHour(hour));
  }

  return (
    <Wrapper className='CalendarHours-wrapper' data-testid='CalendarHours-wrapper'>
      {renderHours()}
    </Wrapper>
  );
}

export default CalendarHours;
