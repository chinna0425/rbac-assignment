import { Component } from "react";
import Popup from "reactjs-popup";
import { MdEdit } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.min.css";

import "./index.css";

class AdminTable extends Component {
  constructor(props) {
    super(props);
    const { text } = this.props;
    if (text === "AddUser") {
      this.state = { text, name: "", role: "Editor", status: "InActive" };
    } else {
      const { row } = this.props;
      this.state = {
        text,
        name: row.name,
        role: row.role,
        status: row.status,
        id: row.id,
      };
    }
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onAddUserSave = (close) => {
    const { text, name, role, status } = this.state;

    const { onAddUser } = this.props;
    const user = { name, role, status };
    this.setState({ text, name: "", role: "Editor", status: "Inactive" });
    onAddUser(user);
    toast.success("User updated successfully!");
    close();
  };

  onUpdateUserSave = (close) => {
    const { name, role, status, id } = this.state;
    const { onAddUser } = this.props;
    const user = { name, role, status, id };
    onAddUser(user);
    toast.success("User updated successfully!");
    close();
  };

  onChangeRole = (event) => {
    this.setState({ role: event.target.value });
  };

  onChangeStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  render() {
    const { text, name, role, status } = this.state;

    return (
      <>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className={
                text === "AddUser"
                  ? "header-logout add-button"
                  : "header-logout button-changes"
              }
            >
              {text === "Edit" ? <MdEdit /> : text}
            </button>
          }
        >
          {(close) => (
            <div className="popup-container">
              <div>
                <div>
                  <label htmlFor="name" className="pop-up-label">
                    Name:
                  </label>
                  <br />
                  <input
                    name="name"
                    className="pop-up-input"
                    onChange={this.onChangeName}
                    value={name || ""}
                    required
                  />
                </div>
                <div>
                  <label className="pop-up-label" htmlFor="role">
                    Role:
                  </label>
                  <br />
                  <select
                    className="pop-up-role"
                    name="role"
                    onChange={this.onChangeRole}
                    value={role || ""}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="User">User</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="status" className="pop-up-label">
                    Status:
                  </label>
                  <br />
                  <select
                    className="pop-up-role"
                    name="status"
                    value={status || ""}
                    onChange={this.onChangeStatus}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="pop-up-button-container">
                  <button
                    type="button"
                    onClick={() => close()}
                    className="header-logout cancel-button"
                  >
                    Cancle
                  </button>
                  {text === "AddUser" ? (
                    <button
                      type="button"
                      className="header-logout confirm-button"
                      onClick={() => this.onAddUserSave(close)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="header-logout confirm-button"
                      onClick={() => this.onUpdateUserSave(close)}
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </Popup>
        <ToastContainer />
      </>
    );
  }
}

export default AdminTable;
