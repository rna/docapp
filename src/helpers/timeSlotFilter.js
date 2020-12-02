export default function timeSlotFilter(arr, curr, prev) {
  const filtered = arr.filter(
    d => curr >= new Date(d.time) && new Date(d.time) > prev,
  );

  if (filtered.length === 0) {
    return '';
  }
  return filtered;
}
