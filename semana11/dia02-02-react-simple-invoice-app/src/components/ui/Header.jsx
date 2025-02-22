import { TbSquareRoundedPlus } from "react-icons/tb";

import { BaseButton } from "./BaseButton";

import { Link } from "react-router";

const Header = ({ title, invoices = 0 }) => {
  return (
    <header className="md:w-[740px] mx-auto flex justify-between items-center py-4 mb-4">
      <div className="text-zinc-800">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <span>There are <strong>{invoices}</strong> total invoices</span>
      </div>

      <Link to='/invoices/new'>
        <BaseButton
          classx="bg-indigo-400 hover:bg-indigo-500 duration-300 font-extrabold text-white flex justify-between items-center gap-2 cursor-pointer"
        >
          <TbSquareRoundedPlus size="2rem" />
          New Invoice
        </BaseButton>
      </Link>
    </header>
  )
}

export default Header