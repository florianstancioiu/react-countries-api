import { useParams } from "react-router";

const Country = () => {
  const { countryId } = useParams();

  return <div>You are in country page and the id is: {countryId}</div>;
};

export default Country;
