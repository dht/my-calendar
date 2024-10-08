export type HourRow = {
  id: number;
  start: string;
  end: string;
};

export const rows: HourRow[] = Array.from({ length: 24 }, (_, index) => {
  const start = index.toString().padStart(2, '0') + ':00';
  const end = (index + 1).toString().padStart(2, '0') + ':00';
  return {
    id: index,
    start: start,
    end: end === '24:00' ? '00:00' : end,
  };
});
