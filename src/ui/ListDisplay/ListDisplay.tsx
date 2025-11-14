import type { ListDisplay } from "../../lib/types/listManagerProps";

export default function ListDisplay({ proyects }: ListDisplay) {
  return (
    <div>
      <ul>
        {proyects.map((p) => (
          <li key={p.id}>
            {p.id} | {p.title} | {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
