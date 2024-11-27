import { Component } from "react";
import MockApiService from "../api/mockApi";
import Headers from "../Header";
import EditorEachCard from "../EditorEachCard";

import "./index.css";

class EditorDashboard extends Component {
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

  handleEditArticle = (post) => {
    MockApiService.editArticle(post);
    this.fetchArticles();
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <Headers />
        <div className="editor-main-container">
          <div className="editor-inner-container">
            <h1 className="admin-title">Editor Dashboard</h1>
            <ul className="editor-unorder-container">
              {articles.map((each) => (
                <EditorEachCard
                  key={each.id}
                  eachItem={each}
                  handleEditArticle={this.handleEditArticle}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default EditorDashboard;
