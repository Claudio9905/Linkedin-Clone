import React from "react";
import { Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const SuggestedCard = ({ profile }) => {
  const navigate = useNavigate();
  return (
    <div className="b-bottom mb-2 pb-2 d-flex">
      <div
        className="me-2 pointer"
        onClick={() => {
          navigate(`/profile/${profile._id}`);
        }}
      >
        <img
          src={profile.image}
          alt="User Image"
          width={40}
          height={40}
          className="rounded-circle"
        />
      </div>
      <div
        className="pointer"
        onClick={() => {
          navigate(`/profile/${profile._id}`);
        }}
      >
        <h5 className="mb-0">
          {profile.name} {profile.surname}
        </h5>
        <p>{profile.title}</p>
      </div>
      <div className="ms-auto">
        <Button variant="outline-primary" className=" rounded-pill">
          <Plus /> Segui
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default SuggestedCard;
