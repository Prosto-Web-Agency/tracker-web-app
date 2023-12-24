export function handleGetTokenAndLogin() {
  const searchParams = new URL(window.location.href).searchParams;

  const token = searchParams.get('token');
  const login = searchParams.get('login');

  return { token, login };
}
