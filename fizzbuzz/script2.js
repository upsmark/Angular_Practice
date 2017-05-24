

for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    return 'fizzbuzz'
  } else if (i % 5 === 0) {
    return 'buzz'
  } else if (i % 3 === 0) {
    return 'fizz'
  } else {
    return i
  }
}
