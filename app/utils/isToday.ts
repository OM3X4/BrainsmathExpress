export default function isToday(isoDateStr: string): boolean {
  const date = new Date(isoDateStr);
  const today = new Date();

  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}