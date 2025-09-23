export const trunc = (text: string, length: number = 24): string => {
  if (text?.length > length) {
    return text?.slice(0, length) + '...';
  }
  return text;
};