import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Screenheader from "../../components/Screenheader";
import Wrapper from "./Wrapper";
import { useCreateMutation } from "../../redux/Services/categoryService";
const CreateCategories = () => {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const [saveCategory, data] = useCreateMutation();
  const errors = data?.error?.data.errors ? data?.error?.data.errors : [];
  console.log(data);
  const submitCategory = (e) => {
    e.preventDefault();
    saveCategory({ name: state });
  };

  useEffect(() => {
    if (data?.isSuccess) {
      navigate("/dashboard/categories");
    }
  }, [data?.isSuccess]);
  return (
    <Wrapper>
      <Screenheader>
        <Link to="/dashboard/categories" className="btn-dark">
          <i className="bi bi-arrow-left-short"></i> categories list
        </Link>
      </Screenheader>
      <form onSubmit={submitCategory} className="w-full md:w-8/12">
        <h3 className="text-lg capitalize mb-3">create category</h3>
        {errors.length > 0 &&
          errors.map((error, key) => (
            <p className="alert-danger" key={key}>
              {error.msg}
            </p>
          ))}
        <div className="mb-3">
          <input
            type="text"
            value={state.category}
            onChange={(e) => setState(e.target.value)}
            name=""
            className="form-control"
            placeholder="Category Name..."
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value={data.isLoading ? "loading..." : "create category"}
            className="btn-indigo"
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default CreateCategories;
