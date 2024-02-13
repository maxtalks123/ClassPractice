import "./TreeCard.css";

export default function TreeCard({ TreeName, imgLink, Location }) {
  return (
    <div id="tree-card">
      <h1>{TreeName}</h1>
      <img src={imgLink} alt=""></img>
      <p>{Location}</p>
    </div>
  );
}
