import EditorChangesPage from "../EditorChangesPage";
import "./index.css";

const EditorEachCard = (props) => {
  const { eachItem, handleEditArticle } = props;
  const { title, description, imgUrl, publishedDate, altVal } = eachItem;
  return (
    <li className="editor-each-card">
      <div className="editor-image-container">
        <img src={imgUrl} alt={altVal} className="editor-image" />
      </div>
      <h1 className="editor-title">{title}</h1>
      <p className="editor-desc">{description}</p>
      <div className="editor-icon-container">
        <p className="editor-desc">
          Pulished At : <strong>{publishedDate}</strong>
        </p>
        <EditorChangesPage
          key={eachItem.id}
          eachItem={eachItem}
          handleEditArticle={handleEditArticle}
        />
      </div>
    </li>
  );
};
export default EditorEachCard;
