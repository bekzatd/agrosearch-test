import React, {useMemo, useState} from "react";
import ModalLg from "../modal-lg/index.jsx";
import {Alert, Badge, Button, Form, ListGroup} from "react-bootstrap";
import {addToCart, currentCart} from "../../features/cart/index.js";
import {useDispatch, useSelector} from "react-redux";
import Service from "../../request/service.js";

export default function Cart({ show, setShow, data }) {
    const service = new Service();
    const dispatch = useDispatch();
    const cart = useSelector(currentCart);
    const [formData, setFormData] = useState({
        tax: ''
    });
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useMemo(() => {
        setResult({});
    }, [show]);

    const submitCart = () => {
        setLoading(true);
        service
            .submitCart({ ...formData, cart })
            .then((r) => {
                setResult(r.data);
            })
            .catch((e) => setErrors(e.response.data.errors))
            .finally(() => setLoading(false));
    }

    const removeFromCart = (id) => {
        const index = cart.findIndex((i) => i.id === id);
        setResult({});
        if (index !== -1) {
            dispatch(addToCart([
                ...cart.slice(0, index),
                ...cart.slice(index + 1),
            ]))
        }
    }

    const clearCart = () => {
        dispatch(addToCart([]));
        setResult({});
    }

    return (
        <ModalLg
            show={show}
            setShow={setShow}
            title={`Корзина: ${data.length}`}
        >
            <div className=" mb-3">
                <Button
                    size="sm"
                    variant="danger"
                    onClick={clearCart}
                    disabled={cart.length === 0}
                >
                    Очистить корзину
                </Button>
            </div>
            <ListGroup>
                {
                    data.map((i, k) => (
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            key={k}
                        >
                            <div>
                                <img src={i.image_url} alt="" width="100px" />
                            </div>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{i.name}</div>
                                <br/>
                                <Button
                                    size="sm"
                                    variant="danger"
                                    onClick={() => removeFromCart(i.id)}
                                >
                                    удалить товар с корзины
                                </Button>
                            </div>
                            <Badge bg="primary" pill>
                                Цена: {i.currency_sign}{i.price}
                            </Badge>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <Form>
                <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                    <Form.Label>TAX - номер</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="DDXXXXXXXXX"
                        disabled={cart.length === 0 || loading}
                        onChange={(e) => setFormData({ tax: e.target.value })}
                        isInvalid={'tax' in errors || 'error' in errors}
                    />
                    {
                        'tax' in errors && (
                            <small className="text-danger">{errors.tax[0]}</small>
                        )
                    }
                    {
                        'error' in errors && (
                            <small className="text-danger">Заполните корректно</small>
                        )
                    }
                </Form.Group>
                {
                    (Object.keys(result).length > 0 && cart.length > 0) && (
                        <Alert variant="success">
                            Сумма: {result.sum} €
                            <br/>
                            Налог в процентах: {result.taxPercent}
                            <br/>
                            Налог: {result.taxSum} €
                            <br/>
                            <h3>Итого: {result.totalSum} €</h3>
                        </Alert>
                    )
                }
                <Button
                    variant="primary"
                    type="button"
                    disabled={cart.length === 0 || loading || formData.tax.length === 0}
                    onClick={submitCart}
                >
                    {
                        loading ? 'Загрузка...' : 'Рассчитать'
                    }

                </Button>
            </Form>
        </ModalLg>
    );
}
