import React from "react";
import { Outlet } from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";

export default function MainLayout() {
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
                        <Button variant="outline-success">Корзина</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>

        </>
    );
}
