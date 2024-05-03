import Item from "./item";

export default function Nav() {
  return (
    <nav className="flex items-center gap-3.5 font-display">
      <Item href="/">Home</Item>
      <Item href="/about">About us</Item>
      <Item href="/carriers">Carrières</Item>
      <Item href="/employer">Espace employeur</Item>
      <Item href="/trainings">Formations</Item>
      <Item href="/contact">Contact</Item>
    </nav>
  );
}
