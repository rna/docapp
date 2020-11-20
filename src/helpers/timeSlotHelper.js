export default function timeSlotHelper(arr, curr, prev) {
  return arr
    .filter(d => curr >= new Date(d) && new Date(d) > prev)
    .map(t => t.split(' ')[1]);
}
