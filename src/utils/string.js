export const formatMoney = (money, decimal = 2, split = ',') => {
  if (typeof money !== 'string') {
    money = money.toString()
  }
}

export const formatThousand = (money) => {
  // 格式化千分位
  return money.replace(/\B(?=(\d{3})+(?!\d))/g, split)
}
