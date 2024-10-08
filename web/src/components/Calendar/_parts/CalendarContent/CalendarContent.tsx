import React from 'react';
import { Meeting, Wrapper } from './CalendarContent.style';
import { IMeeting, IMeetingPositioned } from './CalendarContent.data';

export type CalendarContentProps = {
  meetings: IMeetingPositioned[];
};

export function CalendarContent(props: CalendarContentProps) {
  const { meetings } = props;

  function renderMeeting(meeting: IMeetingPositioned) {
    const { title, position } = meeting;

    const style: React.CSSProperties = {
      ...position,
    };

    return (
      <Meeting style={style} key={meeting.id} className='meeting'>
        {title}
      </Meeting>
    );
  }

  function renderMeetings() {
    return meetings.map((meeting: IMeetingPositioned) => renderMeeting(meeting));
  }

  return (
    <Wrapper className='CalendarContent-wrapper' data-testid='CalendarContent-wrapper'>
      {renderMeetings()}
    </Wrapper>
  );
}

export default CalendarContent;
