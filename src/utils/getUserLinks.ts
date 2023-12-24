export function handleGetUserLink(link: string, type: 'inst' | 'tg') {
  // `https://instagram/${userPopupData?.instagram}`
  if (link.includes('@')) {
    if (type === 'inst') {
      return 'https://instagram/' + link.slice(1);
    }

    return 'https://t.me/' + link.slice(1);
  }

  return link;
}
