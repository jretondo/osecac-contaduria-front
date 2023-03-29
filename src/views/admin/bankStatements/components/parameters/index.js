import React from 'react';
import { Card, CardBody } from 'reactstrap';
import MovementsWOList from './components/list';

const ParametersModule = () => {
    return (<>
        <Card>
            <CardBody>
                <h2 style={{ textAlign: "center" }}>Movimientos sin identificar</h2>
                <MovementsWOList />
            </CardBody>
        </Card>
    </>)
}

export default ParametersModule