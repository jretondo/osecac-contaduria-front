import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const NewTypeModal = ({
    item,
    dataPage,
    setModalActive,
    setNewType,
    newType
}) => {

    return (<>
        <Form onSubmit={e => {
            e.preventDefault()
            setModalActive(2)
        }}>
            <Row>
                <Col md="12">
                    <FormGroup>
                        <Label>Descripción</Label>
                        <Input disabled value={item.description + " " + item.concept} />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Nombre del nuevo tipo</Label>
                        <Input required type="text" value={newType} onChange={e => setNewType(e.target.value)} />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: "center" }}>
                    <Button color="danger"
                        onClick={e => {
                            e.preventDefault()
                            setModalActive(0)
                        }}
                    >Volver</Button>
                    <Button
                        type="submit"
                        color="success">Siguiente</Button>
                </Col>
            </Row>
        </Form>
    </>)
}

export default NewTypeModal