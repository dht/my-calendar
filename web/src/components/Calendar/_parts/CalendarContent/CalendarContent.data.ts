export type IMeeting = {
  id: string;
  title: string;
  startTime: number;
  endTime: number;
};

export type IMeetingPositioned = IMeeting & {
  position: IPosition;
};

export type IPosition = {
  left: number;
  width: number;
  top: number;
  height: number;
};

export const meetings: IMeeting[] = [
  {
    id: '1',
    title: 'Team Standup',
    startTime: 9,
    endTime: 10,
  },
  {
    id: '2',
    title: 'Client Call',
    startTime: 9.5,
    endTime: 10.5,
  },
  {
    id: '3',
    title: 'Project Planning',
    startTime: 10,
    endTime: 11,
  },
  {
    id: '4',
    title: 'Design Review',
    startTime: 15,
    endTime: 16,
  },
  {
    id: '5',
    title: 'Retrospective',
    startTime: 17,
    endTime: 18,
  },
];
