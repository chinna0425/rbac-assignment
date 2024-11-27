import { Component } from "react";
import MockApiService from "../api/mockApi";
import Headers from "../Header";
import UserEachCard from "../UserEachCard";

import "./index.css";

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    const articles = MockApiService.fetchArticles();
    this.setState({ articles });
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <Headers />
        <div className="editor-main-container">
          <div className="editor-inner-container">
            <h1 className="admin-title">User Dashboard</h1>
            <ul className="editor-unorder-container">
              {articles.map((each) => (
                <UserEachCard key={each.id} eachItem={each} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default UserDashboard;
