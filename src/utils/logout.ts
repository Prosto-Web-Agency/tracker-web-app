import { storage } from '@/utils/localStorage';
import { LOGIN, SUBSCRIPTION, TOKEN } from '@/consts/profile';

export function logout() {
  storage.set(TOKEN, '');
  storage.set(LOGIN, '');
  storage.set(SUBSCRIPTION, '');
}
