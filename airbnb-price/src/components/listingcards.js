import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Container,
  Col,
  Row,
  Button,
} from "reactstrap";

function ListingCards(props) {
  return (
    <Container>
      <Row>
        {props.listingArray.map((item) => {
          return (
            <Col xs="12" sm="6" md="4" lg="4">
              <Card key={item.id}>
                <CardTitle>Renter: {item.user_id}</CardTitle>
                <CardText>Room Type: {item.room_type}</CardText>
                <CardText>Minimum Nights: {item.minimum_nights}</CardText>
                <CardText>Bedrooms: {item.bedrooms}</CardText>
                <CardText>Beds: {item.beds}</CardText>
                <CardText>Bathrooms: {item.bathrooms}</CardText>
                <CardText>Cleaning Fee: {item.cleaning_fee}</CardText>
                <CardText>Security Deposit: {item.security_deposit}</CardText>
                <CardText>Estimated Price: {item.estimated_price}</CardText>
                <Button>Favorite</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default ListingCards;
