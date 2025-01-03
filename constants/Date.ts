export function formatDate(timestamp: number): string {
  if (!timestamp) return 'WOW TIME';

  const date = new Date(timestamp);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
