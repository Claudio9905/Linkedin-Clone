import { useSelector } from "react-redux";
import SuggestedCard from "./SuggestedCard";
import { Card } from "react-bootstrap";

const Suggested = () => {
  const profiles = useSelector((state) => state.profile.profile);
  return (
    <Card className="my-3 px-3 py-4">
      <h6 className="mb-4">Consigli per te</h6>
      {[...profiles]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((profile) => (
          <SuggestedCard key={profile._id} profile={profile} />
        ))}
    </Card>
  );
};

export default Suggested;
