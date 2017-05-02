function transportFee(shift){
  if(shift == 'morning')
    return  'R20';
  else if(shift == 'afternoon')
    return 'R10';
  else
    return 'R0 Transport provided for.';
}
module.exports = transportFee;
