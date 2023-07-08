function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestDuration = 0;
  let longestDynasty = "";

  for (let i = 0; i < dynastyReign.length; i++) {
    const { dynasty, endOfReign } = dynastyReign[i];
    const endYear = convertYear(endOfReign);

    if (endYear !== "Invalid") {
      const duration = endYear - 1000 + 1;

      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynasty = dynasty;
      }
    }
  }

  return longestDynasty;
}

function convertYear(romanYear) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanYear.length - 1; i >= 0; i--) {
    const currentNumeral = romanYear[i];
    const currentValue = romanNumerals[currentNumeral];

    if (currentValue === undefined) {
      return "Invalid";
    }

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
      prevValue = currentValue;
    }
  }

  return result;
}

// Example usage:
const dynastyReign = [
  { dynasty: "Dynasty A", endOfReign: "MCMLXXIX" },
  { dynasty: "Dynasty B", endOfReign: "MCMXCIV" },
  { dynasty: "Dynasty C", endOfReign: "MMXVIII" },
  { dynasty: "Dynasty D", endOfReign: "MCMXCVII" }
];

console.log(longestDynasty(dynastyReign));