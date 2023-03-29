import API_ROUTES from '../../../api/routes';
import SecureRoutesContext from 'context/secureRoutes';
import React, { useContext, useEffect, useState } from 'react';
import { ButtonGroup, Card, CardBody, Collapse, Container } from 'reactstrap';
import Header from 'components/Headers/Header';
import ButtonOpenCollapse from 'components/Buttons/buttonOpenCollapse';
import { useWindowSize } from 'hooks/UseWindowSize';
import ChargeMovements from './components/charge';
import ParametersModule from './components/parameters';



const BankStatements = () => {
    const { setUrlRoute } = useContext(SecureRoutesContext)
    const [moduleActive, setModuleActive] = useState(0)

    const width = useWindowSize()

    useEffect(() => {
        setUrlRoute(API_ROUTES.routesDir.sub.userAdmin)
    }, [setUrlRoute])

    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <div style={{ width: "100%" }}>
                    <Card style={{ marginTop: "5px", marginBottom: "10px" }}>
                        <CardBody style={{ textAlign: "center" }}>
                            <ButtonGroup vertical={width > 1030 ? false : true}>
                                <ButtonOpenCollapse
                                    action={() => setModuleActive(0)}
                                    tittle={"Listados"}
                                    active={moduleActive === 0 ? true : false}
                                />
                                <ButtonOpenCollapse
                                    action={() => setModuleActive(1)}
                                    tittle={"Carga"}
                                    active={moduleActive === 1 ? true : false}
                                />
                                <ButtonOpenCollapse
                                    action={() => setModuleActive(2)}
                                    tittle={"Busqueda"}
                                    active={moduleActive === 2 ? true : false}
                                />
                                <ButtonOpenCollapse
                                    action={() => setModuleActive(3)}
                                    tittle={"Parámetros"}
                                    active={moduleActive === 3 ? true : false}
                                />
                            </ButtonGroup>
                        </CardBody>
                    </Card>

                    <Collapse isOpen={moduleActive === 0 ? true : false} >

                    </Collapse>

                    <Collapse isOpen={moduleActive === 1 ? true : false} >
                        <ChargeMovements

                        />
                    </Collapse>

                    <Collapse isOpen={moduleActive === 2 ? true : false} >

                    </Collapse>
                    <Collapse isOpen={moduleActive === 3 ? true : false} >
                        <ParametersModule

                        />
                    </Collapse>
                </div>
            </Container>
        </>
    )
}

export default BankStatements