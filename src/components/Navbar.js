export default function Navbar({ dispatch }) {
  return (
    <nav className="navbar">
      <button
        className="navbar-menu"
        onClick={() => dispatch({ type: "options" })}
      >
        <img src="asset/menu.png" alt="hamburger menu icon" />
      </button>
      <h1>markpad</h1>
    </nav>
  );
}
