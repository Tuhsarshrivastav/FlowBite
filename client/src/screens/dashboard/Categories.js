import { Link, useParams } from "react-router-dom";
import ScreenHeader from "../../components/Screenheader";
import Wrapper from "./Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../redux/reducers/globalReducer";
import { useEffect } from "react";
import { useGetQuery } from "../../redux/Services/categoryService";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
const Categories = () => {
  const dispatch = useDispatch();
  let { page } = useParams();
  if(!page) {
    page = 1;
 }
  const { success } = useSelector((state) => state.globalReducer);
  const { data = [], isFetching } = useGetQuery(page ? page : 1);
  
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
      {!isFetching ? (
        data?.categories?.length > 0 && (
          <>
            <div>
              <table className="w-full bg-gray-900 rounded-md">
                <thead>
                  <tr className="border-b border-gray-800 text-left">
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      name
                    </th>
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      edit
                    </th>
                    <th className="p-3 uppercase text-sm font-medium text-gray-500">
                      delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.categories?.map((category) => (
                    <tr key={category._id} className="odd:bg-gray-800">
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        {category.name}
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        <button>edit</button>
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        <button>delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              page={parseInt(page)}
              perPage={data.perPage}
              count={data.count}
              path="dashboard/categories"
            />
          </>
        )
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

export default Categories;
