import { useContext } from "react";
import  UserContext  from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className=" m-4 flex items-center justify-center bg-green-100">
      <div className=" m-4 bg-white p-4 rounded-xl shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
         

        <p className="mb-4">Welcome, <b>{user?.name } </b></p>

        <button
          onClick={() => setUser('')}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
     