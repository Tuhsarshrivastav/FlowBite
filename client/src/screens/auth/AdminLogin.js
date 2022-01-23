import React from "react";

const AdminLogin = () => {
  return (
    <div className="bg-black1 h-screen flex justify-center items-center">
      <form className="bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded">
        <h3 className="mb-4 text-white capitalize font-semibold text-lg">
          Dashboard Login
        </h3>
        <div className="mb-4">
          <input
            type="email"
            className="w-full bg-black1 p-4 rounded outline-none text-white"
            placeholder="Enter email ..."
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full bg-black1 p-4 rounded outline-none text-white"
            placeholder="Enter password ..."
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Sign In &rarr; "
            className="bg-indigo-600 text-white
             w-full p-4 rounded uppercase font-semibold cursor-pointer
            hover:bg-indigo-800 hover:text-slate-300 transition ease-in-out duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
