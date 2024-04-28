import logo from "../assets/react.svg";
import CartButton from "../components/Button/Button";

const LoginPage = () => {
  return (
    <div className="h-screen bg-light flex justify-center items-center">
      <div className="bg-lighter p-4 rounded-lg shadow-lg w-[90%] md:w-[30%]">
        <img className="m-auto mb-3" src={logo} width={40} />
        
        <p className="text-center text-lg">Sign in to <strong className="text-slate-700">Cartify</strong></p>

        <form className="flex flex-col gap-2">
          <div className="w-full">
            <label className="block text-xs font-semibold" htmlFor="Username">Username</label>
            <input className="w-full p-1.5 rounded shadow text-sm" type="text" id="Username" name="username" />
          </div>
          <div className="w-full">
            <label className="block text-xs font-semibold" htmlFor="Password">Password</label>
            <input className="w-full p-1.5 rounded shadow text-sm" type="password" id="Password" name="password" />
          </div>
          <CartButton bgColor="success" size="xs"> 
            Sign in
          </CartButton>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
