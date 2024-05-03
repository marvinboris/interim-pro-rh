import { Star } from "react-iconly";

export function Rate({ rate }: { rate: number }) {
  return (
    <div className="flex text-star">
      {Array.from({ length: rate }).map((_, i) => (
        <Star size={18} key={Math.random() + i} set="bold" />
      ))}
      {Array.from({ length: 5 - rate }).map((_, i) => (
        <Star size={18} key={Math.random() + i} />
      ))}
    </div>
  );
}
