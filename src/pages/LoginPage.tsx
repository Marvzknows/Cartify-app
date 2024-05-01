import { ChangeEvent, useState } from "react";
import logo from "../assets/react.svg";
import CartButton from "../components/Button/Button";
import { AxiosInstance } from "../API/BaseApi";

const LoginPage = () => {

  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: ''
  })

  // Handle Input Fields
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const validRegex = /^[A-Za-z\s]+$/;
    
    if(name === 'username') {
      if(!validRegex.test(value)) return
      setLoginCredentials((prev) => ({...prev, username: value}))
    }

    if(name === 'password') {
      setLoginCredentials((prev) => ({...prev, password: value}))
    }

  }

  // Submit
  const onSubmitLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {username, password} = loginCredentials;
    if(username.trim() === '' || password.trim() === '') {
      return alert('invalid')
    }
    
    try{
      const data = await AxiosInstance({}).post('/auth/login',loginCredentials);
      console.log(data);
    }catch(er) {
      const error = er as Error;
      if(error) {
        alert('Bad Request')
      }
    }

  }
  
  return (
    <div className="h-screen bg-light flex justify-center items-center">
      <div className="bg-lighter p-4 rounded-lg shadow-lg w-[90%] md:w-[340px]">
        <img className="m-auto mb-3" src={logo} width={40} />

        <p className="text-center text-lg">
          Sign in to <strong className="text-slate-700">Cartify</strong>
        </p>

        <form className="flex flex-col gap-2" onSubmit={onSubmitLogin}>
          <div className="w-full">
            <label className="block text-xs font-semibold" htmlFor="Username">
              Username
            </label>
            <input
              onChange={onChangeInput}
              value={loginCredentials.username}
              className="w-full p-1 rounded shadow text-sm"
              type="text"
              id="Username"
              name="username"
            />
          </div>
          <div className="w-full">
            <label className="block text-xs font-semibold" htmlFor="Password">
              Password
            </label>
            <input
              onChange={onChangeInput}
              value={loginCredentials.password}
              className="w-full p-1 rounded shadow text-sm"
              type="password"
              id="Password"
              name="password"
            />
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
