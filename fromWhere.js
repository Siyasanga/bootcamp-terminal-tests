function fromWhere(carReg){
  //We are extracting the first 2 characters from carReg
  switch (carReg.substring(0,2)) {
    case 'CY':
      return 'Bellville';
      break;
    case 'CJ':
      return 'Paarl';
      break;
    case 'CA':
      return 'Cape Town';
      break;
    default:
      return 'Some other place!';
  }
}
module.exports = fromWhere;
