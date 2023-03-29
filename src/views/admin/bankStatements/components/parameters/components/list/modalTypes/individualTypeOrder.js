import React from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './pulseColor.css';
const IndividualTypeOrder = ({
    name,
    order,
    up,
    down,
    last,
    color
}) => {
    return (<Row>
        <Col md="12" className={color && color}>
            <InputGroup>
                <InputGroupAddon addonType="prepend"><InputGroupText style={{ width: "45px" }}>{order}</InputGroupText></InputGroupAddon>
                <Input disabled value={name} />
                <InputGroupAddon addonType="append">
                    <InputGroupText style={{ padding: "0.225rem 0.75rem" }} >
                        <Button
                            onClick={e => {
                                e.preventDefault()
                                up()
                            }}
                            disabled={order > 0 ? false : true}
                            color="success"
                            style={{
                                padding: "1px",
                                paddingInline: "5px"
                            }}>
                            <i className="ni ni-bold-up"></i>
                        </Button>
                        <Button
                            onClick={e => {
                                e.preventDefault()
                                down()
                            }}
                            disabled={last > order ? false : true}
                            color="danger"
                            style={{
                                padding: "1px",
                                paddingInline: "5px",
                                marginLeft: "10px"
                            }}>
                            <i className="ni ni-bold-down"></i>
                        </Button>
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </Col>
    </Row>)
}

export default IndividualTypeOrder