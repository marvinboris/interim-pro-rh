import Item from "./item";

export default function Nav() {
  return (
    <nav className="flex items-center gap-3.5 font-display">
      <Item exact href="/">Home</Item>
      <Item href="/about">About us</Item>
      <Item href="/careers">Carrières</Item>
      <Item href="/employer">Espace employeur</Item>
      <Item href="/trainings">Formations</Item>
      <Item href="/contact">Contact</Item>
    </nav>
  );
}
