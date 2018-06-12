export default {
    fmtPrice({cents}){
      const dollarStr = Math.floor(cents/100).toString();
      const centStr = Math.floor(cents%100).toString().padStart(2, '0');
      return `\$${dollarStr}.${centStr}`
    },
    amountToCents(amount){
      amount = parseFloat(amount);
      return !isNaN(amount) ? amount * 100 : amount; //NaN or Cents
    }
}