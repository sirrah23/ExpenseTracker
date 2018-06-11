export default {
    fmtPrice({dollars, cents}){
      return `\$${dollars}.${cents.toString().padStart(2, '0').substring(0,2)}`
    }
}