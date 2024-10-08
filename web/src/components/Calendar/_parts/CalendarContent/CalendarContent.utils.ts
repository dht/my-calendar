import { IMeeting, IMeetingPositioned } from './CalendarContent.data';

export const positionMeetings = (meetings: IMeeting[]): IMeetingPositioned[] => {
  const output: IMeetingPositioned[] = [];

  const mapCol: number[] = [];

  meetings.forEach((meeting, index) => {
    const { startTime, endTime } = meeting;

    let col = mapCol.findIndex((end) => {
      return end <= startTime;
    });

    if (col === -1) {
      mapCol.push(endTime);
      col = mapCol.length - 1;
    } else {
      mapCol[col] = endTime;
    }

    const position = {
      left: col * 120,
      width: 120,
      top: startTime * 30,
      height: (endTime - startTime) * 60,
    };

    output.push({
      ...meeting,
      position,
    });
  });

  return output;
};
