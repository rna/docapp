export default function timeSlotHelper(arr, curr, prev) {
  const filtered = arr.filter(
    d => curr >= new Date(d.time) && new Date(d.time) > prev,
  );

  if (filtered.length === 0) {
    return '';
  }
  return filtered.map(t => t.time.split(' ')[1]);
}
