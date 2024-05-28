import { usePageSearchContext } from "../context";
import Block from "./block";

export default function List() {
  const { data, selected, setSelected } = usePageSearchContext();

  return (
    <div className="space-y-3">
      {data.map((job, index) => (
        <Block
          key={"job-" + job.id + "-" + index}
          selected={selected?.id === job.id}
          onClick={() => setSelected(job)}
          {...job}
        />
      ))}
    </div>
  );
}
