import { Component } from "react";

import MockApiService from "../api/mockApi";
import Headers from "../Header";
import AdminTable from "../AdminTable";
import EachUserCard from "../EachUserCard";
import "./index.css";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const users = MockApiService.fetchUsers();
    this.setState({ users });
  };

  handleDeleteUser = (id) => {
    MockApiService.deleteUser(id);
    this.fetchUsers();
  };

  handleSaveUser = (user) => {
    console.log(user);
    if (user.id) {
      MockApiService.editUser(user.id, user);
    } else {
      MockApiService.addUser(user);
    }

    this.fetchUsers();
  };

  render() {
    const { users } = this.state;

    return (
      <>
        <Headers />
        <div className="admin-dashboard-container">
          <div className="admin-inner-container">
            <h1 className="admin-title">Admin Dashboard</h1>

            <AdminTable text="AddUser" onAddUser={this.handleSaveUser} />

            <ul className="unorder-list-container">
              {users.map((each) => (
                <EachUserCard
                  key={each.id}
                  eachData={each}
                  onAddUser={this.handleSaveUser}
                  onDeleteUser={this.handleDeleteUser}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
