function randomIntFromInterval(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

function randomFromInterval(min, max, n) {
  if (min > max) {
    let newMax = min;
    min = max;
    max = newMax;
  }
  return Math.round(Math.random() * (max - min + 1) + min, n);
}
