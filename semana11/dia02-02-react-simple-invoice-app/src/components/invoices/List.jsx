import { TbChevronRight } from "react-icons/tb"
import { Link } from "react-router"
import BaseTag from "../ui/BaseTag"
import { formatDate, formatNumber } from "../../utils"

const List = ({ invoices }) => {
  return (
    <main
      className="md:w-[740px] px-2 mx-auto flex flex-col gap-5"
    >
      {invoices && invoices.map(invoice => (

        <article
          className="bg-white px-4 py-4 rounded-lg text-base shadow md:flex grid grid-cols-2 justify-between items-center gap-3"
          key={invoice.id}
        >
          <div className="md:w-20 text-zinc-800 text-center">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold uppercase">{invoice.code}</span>
          </div>
          <div className="md:w-44 font-semibold text-zinc-500 text-center">{formatDate(invoice.date)}</div>
          <div className="md:w-44 font-semibold text-zinc-500 text-center">{invoice.fullName}</div>
          <div className="md:w-44 font-extrabold text-3xl text-zinc-800 text-center">
            {invoice.currencySymbol}
            {formatNumber(invoice.total)}
          </div>
          <div>
            {invoice.status === 'paid'
              && <BaseTag label={invoice.status} bgColorClass='bg-emerald-500/20' textColorClass='text-emerald-500' /> }
            {invoice.status === 'pending'
              && <BaseTag label={invoice.status} bgColorClass='bg-orange-500/20' textColorClass='text-orange-500' /> }
            {invoice.status === 'draft'
              && <BaseTag label={invoice.status} bgColorClass='bg-slate-500/20' textColorClass='text-slate-500' /> }
          </div>
          <div
            className="md:w-10 flex justify-center"
          >
            <Link to={`/invoices/1`} className="p-3 rounded-full text-zinc-500 hover:bg-zinc-100 duration-300">
              <TbChevronRight />
            </Link>
          </div>
        </article>
      ))}
      
    </main>
  )
}

export default List