import { BaseButton } from "../components/ui/BaseButton"
import { BaseInput } from "../components/ui/BaseInput"

export const Login = () => {
  return (
    <main className="w-[400px] m-auto flex flex-col gap-5">
      <div className="bg-slate-600 p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-white text-center text-4xl font-bold">Invoice app</h2>

        <p className="text-white font-light text-center">Ingresa un nombre de usuario y password</p>

        <form>
          <BaseInput
            label="Username"
            placeholder="jhondoe"
            name="username"
          />
          <BaseInput
            type="password"
            label="Password"
            placeholder="*************"
            name="password"
          />

          <BaseButton
            type="submit"
            label='Login'
            bgColor='bg-violet-500'
            classx='w-full hover:bg-violet-600 duration-300 cursor-pointer'
          />
        </form>
      </div>
    </main>
  )
}