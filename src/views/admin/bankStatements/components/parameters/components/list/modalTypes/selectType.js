import React, { useState } from 'react';
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';

const SelectTypeModal = ({
    item,
    dataPage,
    setModalActive
}) => {


    return (<>
        <Row>
            <Col md="12">
                <FormGroup>
                    <Label>Descripción</Label>
                    <Input disabled value={item.description + " " + item.concept} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="12">
                <FormGroup>
                    <Label>Tipo</Label>
                    <Button
                        style={{ height: "30px", padding: "2px", paddingInline: "5px", marginLeft: "10px" }}
                        onClick={e => {
                            e.preventDefault()
                            setModalActive(1)
                        }}
                    >Nuevo</Button>
                    <Input type="select" style={{ marginTop: "10px" }}>
                        {dataPage.length > 0 ?
                            dataPage.map((item, key) => {
                                return (<option key={key}>{item.name}</option>)
                            }) :
                            <option>No hay tipos - cree uno nuevo</option>
                        }
                    </Input>
                </FormGroup>
            </Col>
        </Row>
    </>)
}

export default SelectTypeModal