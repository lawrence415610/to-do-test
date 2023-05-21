import { useParams } from "react-router";

const DetailPage = () => {
  let { id } = useParams();

  return <h1>{id}</h1>;
};

export default DetailPage;
