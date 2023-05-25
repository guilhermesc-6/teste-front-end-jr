import "./index.scss";

export function Button({ onClick = null, children }) {
  return <button onClick={onClick}>{children}</button>;
}
