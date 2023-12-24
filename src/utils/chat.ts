import { storage } from '@/utils/localStorage';
import { TOKEN } from '@/consts/profile';

export const normDate = (d: string) => {
  const date = new Date(d);
  let newMinutes;

  const [hours, minutes] = [
    date.getHours(),
    date.getMinutes().toString().split(''),
  ];

  if (minutes.length === 1) {
    newMinutes = `0${minutes[0]}`;
  } else {
    newMinutes = date.getMinutes();
  }

  return hours + ':' + newMinutes;
};

export function getLinkOnChatWithCoach() {
  return String(process.env.WEBSOCKET_COACHING) + storage.get(TOKEN) ?? '';
}

export function getLinkOnChatWithPsychologist() {
  return String(process.env.WEBSOCKET_PSYCHOLOGIST) + storage.get(TOKEN) ?? '';
}
