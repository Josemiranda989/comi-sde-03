import { useParams } from "react-router-dom";

export function Test() {
  const { id } = useParams();

  if (id > 5) return <div>Sos mayor a 5</div>;
  if (id == 5) return <div>Acertaste</div>;
}
