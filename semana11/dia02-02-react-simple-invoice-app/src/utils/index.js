export const formatNumber = (number) => {
  const localeDefault = 'en-US'

  const options = {
    minimumFractionDigits: 2
  }

  return new Intl.NumberFormat(localeDefault, options).format(number)
}

export const formatDate = (date) => {
  const dateParsed = new Date(date)

  const localeDefault = 'en-US'

  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }

  return new Intl.DateTimeFormat(localeDefault, options).format(dateParsed)
}