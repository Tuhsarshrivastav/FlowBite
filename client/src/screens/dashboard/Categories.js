import { Link } from "react-router-dom";
import ScreenHeader from "../../components/Screenheader";
import Wrapper from "./Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../redux/reducers/globalReducer";
import { useEffect } from "react";
const Categories = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.globalReducer);

  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, []);

  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-category" className="btn-dark">
          add categories <i class="bi bi-plus"></i>
        </Link>
      </ScreenHeader>
      {success && <div className="alert-success">{success}</div>}
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae
      tempora voluptatibus rem neque optio, deserunt, autem, est distinctio
      assumenda ratione cum esse at. Vero inventore officia perspiciatis
      quisquam consequatur!
    </Wrapper>
  );
};

export default Categories;
