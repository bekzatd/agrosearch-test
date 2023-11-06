import React, {useState} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Service from "../../request/service.js";

export default function Products() {
    const service = new Service();
    const [data, setData] = useState([]);

    const getData = () => {
        service
            .products()
            .then((r) => {
                setData(r.data);
            });
    }

    useState(() => {
        getData();
    })

    return (
      <Container>
          <Row>
              {
                  data.map((i) => (
                      <Card style={{ width: '20rem', marginRight: '20px', marginTop: '20px' }}>
                          <Card.Img variant="top" src={i.image_url} />
                          <Card.Body>
                              <Card.Title>{i.name} - {`${i.currency_sign}${i.price}`}</Card.Title>
                              <Button variant="primary">В корзину</Button>
                          </Card.Body>
                      </Card>
                  ))
              }
          </Row>
      </Container>
    );
}
