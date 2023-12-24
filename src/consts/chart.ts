export type TColors = {
  color1: string;
  color2: string;
};

export const CHART_COLORS: string[][] = [
  ['#E52C31', '#E4355F', '#FFEAEB', '#920211', 'rgba(229, 44, 49, 0.2)'],
  ['#FF833E', '#84382E', '#FDE5D7', '#D5520A', 'rgba(255, 131, 62, 0.2)'],
  ['#48BC5B', '#E2FED1', '#50E5A6', '#0D8521', 'rgba(72, 188, 91, 0.2)'],
  ['#35AAC3', '#D5EDF2', '#2B7DDB', 'rgba(53, 170, 195, 0.2)', '#6C45D9'],
];

export const MOCKS_CHARTS = [
  {
    data: [154, 421],
    labels: ['Виктор', 'Анвар'],
    name: 'Респект друзьям',
  },
  {
    data: [154, 421],
    labels: ['Виктор', 'Анвар'],
    name: 'Колесо баланса',
  },
  {
    data: [12, 22],
    labels: ['Мама', 'Папа'],
    name: 'Время с семьей',
  },
  {
    data: [42, 122],
    labels: ['Виктор', 'Анвар'],
    name: 'Время с друзьями',
  },
  {
    data: [45, 14],
    labels: ['Горные лыжи', 'Теннис'],
    name: 'Время на отдых',
  },
];
