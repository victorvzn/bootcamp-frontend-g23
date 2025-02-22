const BASE_API_URL = 'https://67ad6dbf3f5a4e1477dda225.mockapi.io'

export const fetchInvoices = async () => {
  const response = await fetch(`${BASE_API_URL}/invoices`)

  return await response.json()
}