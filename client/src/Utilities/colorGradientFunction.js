//  converts a percentage into a name of a color or rgb code - set to a gradient from red to green

const colorGradientFunction = (percent) => {
  let r, g, b = 0;
  if (typeof(percent) !== 'number') return 'none';
  //  lower bound outlier
  if (percent < .1) return 'red';
  //  upper bound outlier
  if (percent > 2) return 'green';
	if (percent < .25) {
		r = 255;
		g = Math.round(5.1 * percent);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * percent);
	}
	let h = r * 0x10000 + g * 0x100 + b * 0x1;
  return '#' + ('000000' + h.toString(16)).slice(-6);
}

export default colorGradientFunction;
