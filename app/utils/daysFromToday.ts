export default function daysFromToday(isoDateStr: string): number {
    const givenDate = new Date(isoDateStr);
    const today = new Date();

    // Reset hours/minutes/seconds/ms for accurate full-day diff
    givenDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffMs = today.getTime() - givenDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return diffDays;
}
