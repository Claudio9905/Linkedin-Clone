import { Card } from "react-bootstrap";

const CreatePost = ({ profile }) => {
  return (
    <Card>
      <div className="py-3 px-2 d-flex ">
        <img
          src={profile.image}
          alt="immagine di profilo"
          className="rounded-circle me-2"
          width={50}
        />
        <button className="w-100 ps-3 border border-1 border-secondary text-start rounded-pill fw-bold btn-post">
          Crea un post
        </button>
      </div>
    </Card>
  );
};

export default CreatePost;
