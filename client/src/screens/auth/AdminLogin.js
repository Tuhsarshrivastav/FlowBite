import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../redux/reducers/authReducer";
import { useAuthLoginMutation } from "../../redux/Services/authService";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const [login, response] = useAuthLoginMutation();
  console.log("response", response);
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];
  const adminLogin = (e) => {
    e.preventDefault();
    login(state);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("admin-token", response?.data?.token);
      dispatch(setAdminToken(response?.data?.token));
      navigate("/dashboard/products");
    }
  }, [response.isSuccess, dispatch]);
  return (
    <div className="bg-black1 h-screen flex justify-center items-center">
      <form
        onSubmit={adminLogin}
        className="bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded"
      >
        <h3 className="mb-4 text-white capitalize font-semibold text-lg">
          Dashboard Login
        </h3>
        {errors.length > 0 &&
          errors.map((error, key) => (
            <div key={key}>
              <p className="bg-red-100 text-red-700 p-3 mb-2 rounded-sm text-sm font-medium">
                {error.msg}
              </p>
            </div>
          ))}
        <div className="mb-4 mt-4">
          <input
            type="email"
            className="w-full bg-black1 p-4 rounded outline-none text-white"
            placeholder="Enter email "
            name="email"
            onChange={handleInputs}
            value={state.email}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full bg-black1 p-4 rounded outline-none text-white"
            placeholder="Enter password "
            name="password"
            onChange={handleInputs}
            value={state.password}
          />
        </div>
        <div className="mb-4 ">
          <input
            type="submit"
            value={response.isLoading ? "Loading" : "Sign In "}
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
