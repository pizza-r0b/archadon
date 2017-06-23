
const nameReg = /[^_]*/;
const priceReg = /[^$]*$/;

function parse(data) {
  return data.map(item => {
    const [n] = nameReg.exec(item.SKU);
    const Name = `${n.replace(/\./g, `'`)}${item.Name ? ` ${item.Name}` : ''}`;
    const [width, height] = n.split('x');
    const Width = width * 1;
    const Height = height * 1;
    const Weight = item.Weight * 1;

    const [p] = priceReg.exec(item.Price);
    const Price = p * 2;
    return Object.assign({}, item, {
      Name,
      Width,
      Height,
      Weight,
      Price,
    });
  });
}

module.exports = parse;
