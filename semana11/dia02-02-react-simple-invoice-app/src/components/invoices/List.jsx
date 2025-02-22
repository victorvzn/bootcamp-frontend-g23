import { TbChevronRight } from "react-icons/tb"
import { Link } from "react-router"
import BaseTag from "../ui/BaseTag"

const List = ({ invoices }) => {
  return (
    <main
      className="md:w-[740px] px-2 mx-auto flex flex-col gap-5"
    >
      <article
        className="bg-white px-4 py-4 rounded-lg text-base shadow md:flex grid grid-cols-2 justify-between items-center gap-3"
      >
        <div className="md:w-20 text-zinc-800 text-center">
          <span className="text-slate-400">#</span>
          <span className="font-extrabold uppercase">XYZ123</span>
        </div>
        <div className="md:w-44 font-semibold text-zinc-500 text-center">date</div>
        <div className="md:w-44 font-semibold text-zinc-500 text-center">fullName</div>
        <div className="md:w-44 font-extrabold text-3xl text-zinc-800 text-center">$1500.00</div>
        <div>
          <BaseTag label="paid" bgColorClass='bg-emerald-500/20' textColorClass='text-emerald-500' />
          {/* <BaseTag label="pending" bgColorClass='bg-orange-500/20' textColorClass='text-orange-500' /> */}
          {/* <BaseTag label="draft" bgColorClass='bg-slate-500/20' textColorClass='text-slate-500' /> */}
        </div>
        <div
          className="md:w-10 flex justify-center"
        >
          <Link to={`/invoices/1`} className="p-3 rounded-full text-zinc-500 hover:bg-zinc-100 duration-300">
            <TbChevronRight />
          </Link>
        </div>
      </article>
    </main>
  )
}

export default List