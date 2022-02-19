import { Link } from "react-router-dom";
import Screenheader from "../../components/Screenheader";
import Wrapper from "./Wrapper";

const CreateCategories = () => {
  return (
    <Wrapper>
      <Screenheader>
        <Link to="/dashboard/categories" className="btn-dark">
          <i class="bi bi-arrow-left-short"></i> categories list
        </Link>
      </Screenheader>
      <form className="w-full md:w-8/12">
        <h3 className="text-lg capitalize mb-3">create category</h3>
        <div className="mb-3">
          <input
            type="text"
            name=""
            className="form-control"
            placeholder="Category Name..."
          />
        </div>
        <div className="mb-3">
          <input type="submit" value="create category" class="btn-indigo" />
        </div>
      </form>
    </Wrapper>
  );
};

export default CreateCategories;