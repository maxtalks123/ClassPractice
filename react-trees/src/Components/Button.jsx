import "./Button.css";

export default function Button({ message }) {
  return (
    <button
      className="TreeButton"
      onClick={function handleClick() {
        console.log(message);
      }}
    >
      I am a button
    </button>
  );
}
