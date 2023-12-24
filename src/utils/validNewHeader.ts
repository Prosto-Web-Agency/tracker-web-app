export function validHeaderValue(header?: string) {
  if (!header) {
    return '***';
  } else if (header.length > 100) {
    return header.slice(0, 100) + '...';
  }

  return header;
}
