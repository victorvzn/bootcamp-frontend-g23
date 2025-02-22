import { useEffect, useState } from 'react'
import { fetchInvoices } from '../services/invoices'
import Header from '../components/ui/Header'
import List from '../components/invoices/List'

export const InvoiceList = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    fetchInvoices()
      .then(invoices => setInvoices(invoices))
  }, [])

  return (
    <>
      <Header title="Invoices" invoices={invoices.length} />

      <List invoices={invoices} />

      {/* <pre>{JSON.stringify(invoices, null, 2)}</pre> */}
    </>
  )
}