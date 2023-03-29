import API_ROUTES from '../../../../../../../api/routes';
import { TableList } from 'components/Lists/TableList';
import ActionsBackend from 'context/actionsBackend';
import React, { useContext, useState } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import AlertsContext from 'context/alerts';
import { useAxiosGetList } from 'hooks/useAxiosGetList';
import MovementsWORow from './row';

const MovementsWOList = () => {
    const [refreshList, setRefreshList] = useState(false)

    const { newAlert } = useContext(AlertsContext)

    const {
        dataPage,
        loadingList
    } = useAxiosGetList(
        API_ROUTES.bankStatementsDir.sub.movements,
        0, refreshList, [{ wo_type: true }]
    )



    if (loadingList) {
        return (<Row><Col style={{ textAlign: "center" }}><Spinner style={{ width: "200px", height: "200px" }} /></Col></Row>)
    }
    return (<>
        <Row>
            <Col md="12">
                <TableList
                    titlesArray={["Fecha", "Comprobante", "Descripción", "Concepto", "Monto", ""]}
                >
                    {
                        dataPage.length > 0 ?
                            dataPage.map((item, key) => {
                                return (<MovementsWORow key={key} id={key} item={item} />)
                            }) : <tr><td>No hay movimientos sin asignar tipo</td></tr>
                    }
                </TableList>
            </Col>
        </Row>
    </>)
}

export default MovementsWOList