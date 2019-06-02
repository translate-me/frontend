export function sortArrayOfNumbers(a, b) {
  return a - b;
}

export function calculatePrivacyLevel(wordCount, amountBreakpoints) {
  if (amountBreakpoints === 1) {
    return wordCount / 2;
  }
  const auxPrivacyLevel = (wordCount / amountBreakpoints);
  const privacyLevel = (wordCount - auxPrivacyLevel) * 3;
  return privacyLevel;
}
