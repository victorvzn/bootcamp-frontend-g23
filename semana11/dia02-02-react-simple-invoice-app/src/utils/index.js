export const formatNumber = (number) => {
  const localeDefault = 'en-US'

  const options = {
    minimumFractionDigits: 2
  }

  return new Intl.NumberFormat(localeDefault, options).format(number)
}