export default function memoryUsedHandler(arr) {
  let memoryUsed = 0;
  arr.forEach((item) => {
    const mb = Number((item.size / (1024 ^ 2) / 1000).toFixed(2));
    memoryUsed = memoryUsed + mb;
  });
  return memoryUsed.toFixed(2);
}
