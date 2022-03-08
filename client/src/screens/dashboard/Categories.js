import { Link, useParams } from "react-router-dom";
import ScreenHeader from "../../components/Screenheader";
import Wrapper from "./Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../redux/reducers/globalReducer";
import { useEffect } from "react";
import { useGetQuery } from "../../redux/Services/categoryService";

const Categories = () => {
  const dispatch = useDispatch();
  const { page } = useParams();
  const { success } = useSelector((state) => state.globalReducer);
  const { data = [], isLoading } = useGetQuery(page ? page : 1);
  console.log("your data", data);
  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, []);

  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-category" className="btn-dark">
          add categories <i className="bi bi-plus"></i>
        </Link>
      </ScreenHeader>
      {success && <div className="alert-success">{success}</div>}
      {isLoading && <div className="alert-success">Loading...</div>}
      {/* {data.map((category)=>(
        console.log(category)
      ))} */}
    </Wrapper>
  );
};

export default Categories;
