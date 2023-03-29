import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import IndividualTypeOrder from './individualTypeOrder';

const OrderTypesModal = ({
    item,
    dataPage,
    setModalActive,
    newType
}) => {
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        const lastOrder = dataPage.length > 0 ? dataPage[dataPage.length - 1].order : 0
        setOrderList([...dataPage, {
            order: lastOrder + 1,
            name: newType
        }])
    }, [newType, dataPage])

    const toUp = (order) => {
        const newOrder = order - 1
        let actualItem = orderList[order]
        actualItem.order = newOrder
        actualItem.active = "up"
        let nextItem = orderList[order - 1]
        nextItem.order = orderList[order].order + 1
        nextItem.active = "down"
        let prepend = orderList.slice(0, order - 1)
        prepend.map(obj => ({ ...obj, active: false }))
        let append = orderList.slice(order + 1, orderList.length)
        append.map(obj => ({ ...obj, active: false }))
        const newList = [...prepend, actualItem, nextItem, ...append]
        setOrderList(newList)
    }

    const toDown = (order) => {
        const newOrder = order + 1
        let actualItem = orderList[order]
        actualItem.order = newOrder
        actualItem.active = "down"
        let nextItem = orderList[order + 1]
        nextItem.order = orderList[order].order - 1
        nextItem.active = "up"
        let prepend = orderList.slice(0, order)
        prepend.map(obj => ({ ...obj, active: false }))
        let append = orderList.slice(order + 2, orderList.length)
        append.map(obj => ({ ...obj, active: false }))
        const newList = [...prepend, nextItem, actualItem, ...append]
        setOrderList(newList)
    }

    return (<>
        <Row>
            <Col>
                <h2 style={{ textAlign: "center" }}>Ordene el nuevo tipo</h2>
            </Col>
        </Row>
        {
            orderList.length > 0 &&
            orderList.map((item, key) => {
                return (<IndividualTypeOrder
                    key={key}
                    name={item.name}
                    order={item.order}
                    color={item.active}
                    up={() => toUp(item.order)}
                    down={() => toDown(item.order)}
                    last={orderList.length - 1}
                />)
            })
        }
        <Row style={{ marginTop: "20px" }}>
            <Col style={{ textAlign: "center" }}>
                <Button color="danger"
                    onClick={e => {
                        e.preventDefault()
                        setModalActive(1)
                    }}
                >Volver</Button>
                <Button
                    type="submit"
                    color="success">Siguiente</Button>
            </Col>
        </Row>
    </>)
}

export default OrderTypesModal