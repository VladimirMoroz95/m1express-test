function drawRating(vote) {
  switch(true) {
    case vote < 0: return 'failed';
    case vote <= 20: return '0 - 20';
    case vote <= 40: return '21 - 40';
    case vote <= 60: return '41 - 60';
    case vote <= 80: return '61 - 80';
    case vote <= 100: return '81 - 100';
  }
}

console.log('drawRating');
console.log(drawRating(0));
console.log(drawRating(1));
console.log(drawRating(50));
console.log(drawRating(99));

