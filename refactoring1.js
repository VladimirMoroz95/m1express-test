"use strict";

function func(s, a, b) {

  if (s.match(/^$/)) {
    return -1;
  }

  let i = s.length -1;
  let aIndex = -1;
  let bIndex = -1;

  while ((aIndex === -1) && (bIndex === -1) && (i > 0)) {
    if (s.substring(i, i+1) === a) {
      aIndex = i;
    }
    if (s.substring(i, i+1) === b) {
      bIndex = i;
    }
    i--;
  }

  if (aIndex !== -1 || bIndex === -1) {
      return Math.max(aIndex, bIndex);
  }

  return bIndex;
}
