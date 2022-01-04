```
function calculaPrecoTotal(quantidade) {
  if(quantidade < 12) {
    let precoTotal = quantidade * 1.30
  }
  else if (quantidade >= 12) {
   let precoTotal = quantidade * 1
  }
  return precoTotal
}
 ```