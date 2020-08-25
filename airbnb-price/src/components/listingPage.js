import React from "react";
import { Card, CardTitle, CardText, Container, Col, Row } from "reactstrap";
import { axiosWithAuth as axios } from "../utils/axiosWithAuth";
import ListingCards from "./listingcards";

const ListingPage = () => {
  const [data, setData] = React.useState([]);
  {
    /*Will put search area here*/
  }
  React.useEffect(() => {
    axios()
      .get("/api/property")
      .then((pull) => {
        console.log(pull.data);
        setData(pull.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>listing</h1>
      <ListingCards listingArray={data} />
    </div>
  );
};

export default ListingPage;
