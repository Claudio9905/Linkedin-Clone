import { PencilFill } from "react-bootstrap-icons";

export default function EditProfile({ style = {} }) {
  return (
    <div className="position-relative">
      <PencilFill size={18} className="position-absolute" style={style} />
    </div>
  );
}
