function randomIntFromInterval(min, max) {
  if (min > max) {
    let newMax = min;
    min = max;
    max = newMax;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloatFromInterval(min, max, n = 2) {
  if (min > max) {
    let newMax = min;
    min = max;
    max = newMax;
  }

  let randomFloat = Math.random() * (max - min) + min;
  return randomFloat.toFixed(n);
}
