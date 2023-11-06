import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Cart from "../components/cart/index.jsx";
import {useSelector} from "react-redux";
import {currentCart} from "../features/cart/index.js";

export default function MainLayout() {
    const cart = useSelector(currentCart);

    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">AgroSearchTest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        />
                        <Button
                            variant="outline-success"
                            onClick={() => setShow(true)}
                            disabled={cart.length === 0}
                        >
                            Корзина {cart.length > 0 ? `: ${cart.length}` : ''}
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>
            <Cart
                show={show}
                setShow={setShow}
                data={cart}
            />
        </>
    );
}
