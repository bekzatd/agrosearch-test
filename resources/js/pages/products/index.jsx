import React, {useState} from "react";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import Service from "../../request/service.js";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, currentCart} from "../../features/cart/index.js";

export default function Products() {
    const service = new Service();
    const dispatch = useDispatch();
    const cart = useSelector(currentCart);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = () => {
        setLoading(true);
        service
            .getProducts()
            .then((r) => {
                setData(r.data);
            })
            .finally(() => setLoading(false));
    }

    const handleCart = (item) => {
        const index = cart.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            alert('Уже в корзине!');
        } else {
            dispatch(addToCart([
                ...cart,
                item,
            ]));
        }
    }

    const removeFromCart = (id) => {
        const index = cart.findIndex((i) => i.id === id);
        if (index !== -1) {
            dispatch(addToCart([
                ...cart.slice(0, index),
                ...cart.slice(index + 1),
            ]))
        }
    }

    useState(() => {
        // dispatch(addToCart([]));
        getData();
    })

    return (
      <Container>
          <Row>
              {
                  loading ? (
                      <div className="d-flex align-items-center justify-content-center mt-5">
                          <Spinner animation="border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </Spinner>
                      </div>
                  ) : data.map((i, k) => {
                      const index = cart.findIndex((item) => i.id === item.id);
                      return (
                          <Card key={k} style={{ width: '20rem', marginRight: '20px', marginTop: '20px' }}>
                              <Card.Img variant="top" src={i.image_url} />
                              <Card.Body>
                                  <Card.Title>{i.name} - {`${i.currency_sign}${i.price}`}</Card.Title>
                                  {
                                      index !== -1
                                          ? (
                                              <Button
                                                  variant="danger"
                                                  onClick={() => removeFromCart(i.id)}
                                                  disabled={index === -1}
                                              >
                                                  Удалить
                                              </Button>
                                          )
                                          : (
                                          <Button
                                              variant="primary"
                                              onClick={() => handleCart(i)}
                                              disabled={index !== -1}
                                          >
                                              В корзину
                                          </Button>
                                      )
                                  }

                              </Card.Body>
                          </Card>
                      )
                  })
              }
          </Row>
      </Container>
    );
}
