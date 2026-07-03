const Jimp = require('jimp');
Jimp.read('https://i.imgur.com/lvxcasZ.png').then(image => {
  const colors = {};
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const a = this.bitmap.data[idx + 3];
    if (a > 50 && (r < 250 || g < 250 || b < 250) && (r > 10 || g > 10 || b > 10)) { // ignore near white and near black
      const rgb = r+','+g+','+b;
      colors[rgb] = (colors[rgb] || 0) + 1;
    }
  });
  const sorted = Object.entries(colors).sort((a,b)=>b[1]-a[1]).slice(0,10);
  console.log('Dominant Colors:', sorted);
}).catch(console.error);
