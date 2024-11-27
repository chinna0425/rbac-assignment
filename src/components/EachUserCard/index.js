import { AiOutlineDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.min.css";
import AdminTable from "../AdminTable";

import "./index.css";

const EachUserCard = (props) => {
  const { eachData, onAddUser, onDeleteUser } = props;

  const deleteUser = () => {
    onDeleteUser(eachData.id);
    toast.error("User Deleted SuccessFully");
  };

  return (
    <li className="each-card-item">
      <div className="image-icon-container">
        <AdminTable text="Edit" row={eachData} onAddUser={onAddUser} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
          alt="icon"
        />
        <button
          type="button"
          className="header-logout button-changes"
          onClick={deleteUser}
        >
          <AiOutlineDelete />
        </button>
      </div>

      <h1 className="title">{eachData.name}</h1>
      <p className="description">{eachData.role}</p>
      <p className={eachData.status === "Active" ? "status" : "inactive"}>
        {eachData.status}
      </p>
      <ToastContainer />
    </li>
  );
};

export default EachUserCard;
