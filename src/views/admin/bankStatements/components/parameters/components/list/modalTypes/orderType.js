import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'reactstrap';
import IndividualTypeOrder from './individualTypeOrder';
import ActionsBackend from 'context/actionsBackend';
import API_ROUTES from '../../../../../../../../api/routes';
import AlertsContext from 'context/alerts';

const OrderTypesModal = ({
    item,
    dataPage,
    setModalActive,
    newType
}) => {
    const [orderList, setOrderList] = useState([])
    const [loading, setLoading] = useState(false)

    const { axiosPut } = useContext(ActionsBackend)
    const { newAlert } = useContext(AlertsContext)

    useEffect(() => {
        const lastOrder = dataPage.length > 0 ? dataPage[dataPage.length - 1].order : 0
        const newList = dataPage.length > 0 ? dataPage.map(item => ({ ...item, original: item.order })) : []
        setOrderList([...newList, {
            order: lastOrder + 1,
            name: newType,
            original: null
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

    const applyChanges = async () => {
        const data = {
            orderList
        }
        setLoading(true)
        const response = await axiosPut(API_ROUTES.bankStatementsDir.sub.types, data)
        if (!response.error) {
            newAlert("success", "Movimientos actualizados!", "Los movimientos fueron actualizados con éxito!")
        } else {
            newAlert("danger", "Hubo un error al querer extraer los saldos", "error: " + response.errorMsg)
        }
        setLoading(false)
    }

    return (<>
        <Form onSubmit={e => {
            e.preventDefault()
            applyChanges()
        }}>
            {
                loading ?
                    <Row>
                        <Col md="12" style={{ textAlign: "center" }}>
                            <Spinner style={{ with: "200px", height: "200px" }} />
                        </Col>
                    </Row>
                    :
                    <>
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
                                    color="success">Aplicar</Button>
                            </Col>
                        </Row>
                    </>
            }
        </Form>
    </>)
}

export default OrderTypesModal