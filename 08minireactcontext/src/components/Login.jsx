import { useContext, useState } from "react";
import  UserContext from "../context/UserContext";

function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);
  

  const handleLogin = (e) => {
   e.preventDefault();
    setUser({ name,password });
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className=" m-4 bg-white p-4 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Enter name"
          className="w-full border p-2 rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="passwrod"
          placeholder="password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
