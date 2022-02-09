import { Link } from "react-router-dom";
const AdminNav = ({opensidebar}) => {
  return (
    <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
      <div className="bg-gray-800 w-full flex justify-between items-center sm:justify-end p-4">
        <i  onClick={opensidebar} className="bi bi-filter-left text-white text-xl cursor-pointer sm:hidden block"></i>
        <Link
          to="/"
          className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize"
        >
          logout
        </Link>
      </div>
    </nav>
  );
};
export default AdminNav;
