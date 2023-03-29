import API_ROUTES from '../../../../../../../../api/routes';
import { useAxiosGetList } from 'hooks/useAxiosGetList';
import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner } from 'reactstrap';
import SelectTypeModal from './selectType';
import NewTypeModal from './newType';
import OrderTypesModal from './orderType';

const ModalAddType = ({
    isOpen,
    toggle,
    item
}) => {
    const [refreshList, setRefreshList] = useState(false)
    const [modalActive, setModalActive] = useState(0)
    const [newType, setNewType] = useState("")

    const {
        dataPage,
        loadingList
    } = useAxiosGetList(
        API_ROUTES.bankStatementsDir.sub.types,
        0, refreshList, []
    )

    useEffect(() => {
        isOpen && setRefreshList(!refreshList)
        isOpen && setModalActive(0)
        // eslint-disable-next-line
    }, [isOpen])

    return (<>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                Designar Tipo de Movimiento
            </ModalHeader>
            {
                loadingList ?
                    <Row>
                        <Col md="12" style={{ textAlign: "center" }}>
                            <Spinner style={{ width: "200px", height: "200px" }} />
                        </Col>
                    </Row>
                    :
                    <>
                        <ModalBody>
                            {modalActive === 0 && <SelectTypeModal
                                item={item}
                                setModalActive={setModalActive}
                                dataPage={dataPage}
                            />}
                            {modalActive === 1 && <NewTypeModal
                                item={item}
                                setModalActive={setModalActive}
                                dataPage={dataPage}
                                newType={newType}
                                setNewType={setNewType}
                            />}
                            {modalActive === 2 && <OrderTypesModal
                                item={item}
                                setModalActive={setModalActive}
                                dataPage={dataPage}
                                newType={newType}
                            />}
                        </ModalBody>
                    </>
            }
            <ModalFooter>
                {modalActive === 0 &&
                    <Col md="12" style={{ textAlign: "center" }}>
                        <Button color="danger"
                            onClick={e => {
                                e.preventDefault()
                                modalActive === 0 ? toggle() : setModalActive(modalActive - 1)
                            }}
                        >Cancelar</Button>
                        <Button color="success">Aplicar</Button>
                    </Col>}
            </ModalFooter>
        </Modal>
    </>)
}

export default ModalAddType