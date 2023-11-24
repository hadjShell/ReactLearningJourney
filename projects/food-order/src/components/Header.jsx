import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <div id="main-header">
      <section id="title">
        <img src={logo} alt="Logo"></img>
        <h1>REACTFOOD</h1>
      </section>

      <button>Cart</button>
    </div>
  );
}
