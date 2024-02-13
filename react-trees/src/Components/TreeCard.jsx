import "./TreeCard.css";

export default function TreeCard({ TreeName, imgLink, Location, Button }) {
  return (
    <div id="tree-card">
      <h1>{TreeName}</h1>
      <img src={imgLink} alt=""></img>
      <p>{Location}</p>
      <div>{Button}</div>
    </div>
  );
}
