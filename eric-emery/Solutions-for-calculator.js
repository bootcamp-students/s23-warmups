function coinCombo (cents) {
  return [cents % 5, Math.trunc(cents % 25 % 10 / 5), Math.trunc(cents % 25 / 10), Math.trunc(cents/25)]
}
