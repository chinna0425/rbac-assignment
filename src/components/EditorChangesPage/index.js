import { Component } from "react";
import Popup from "reactjs-popup";
import { MdEdit } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

import "./index.css";

class EditorChangesPage extends Component {
  constructor(props) {
    super(props);
    const { eachItem } = this.props;
    this.state = { desc: eachItem.description };
  }

  onChangeDesc = (event) => {
    this.setState({ desc: event.target.value });
  };

  onUpdateEditor = (close) => {
    const { desc } = this.state;
    const { eachItem, handleEditArticle } = this.props;
    const user = { ...eachItem, description: desc };
    handleEditArticle(user);
    toast.success("Description Updated SuccessFully");
    close();
  };

  render() {
    const { desc } = this.state;

    return (
      <>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="header-logout button-changes editor-button"
            >
              <MdEdit />
            </button>
          }
        >
          {(close) => (
            <div className="popup-container">
              <div>
                <div>
                  <p className="editor-pop-up-label">Description:</p>
                  <textarea
                    rows="5"
                    cols="30"
                    onChange={this.onChangeDesc}
                    value={desc || ""}
                    className="pop-up-editor"
                  >
                    {" "}
                  </textarea>
                </div>
                <div className="pop-up-button-container">
                  <button
                    type="button"
                    onClick={() => close()}
                    className="header-logout cancel-button"
                  >
                    Cancle
                  </button>
                  <button
                    type="button"
                    className="header-logout confirm-button"
                    onClick={() => this.onUpdateEditor(close)}
                  >
                    Update
                  </button>
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

export default EditorChangesPage;
