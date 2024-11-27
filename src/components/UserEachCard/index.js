import "./index.css";

const UserEachCard = (props) => {
  const { eachItem } = props;
  const { id, title, description, imgUrl, publishedDate } = eachItem;
  return (
    <li className="editor-each-card">
      <div className="editor-image-container">
        <img src={imgUrl} alt={`${id}+ "item"`} className="editor-image" />
      </div>
      <h1 className="editor-title">{title}</h1>
      <p className="editor-desc">{description}</p>
      <div className="editor-icon-container">
        <p className="editor-desc">
          Pulished At : <strong>{publishedDate}</strong>
        </p>
      </div>
    </li>
  );
};
export default UserEachCard;
