import { numberFormat } from 'function/numberFormat';
import moment from 'moment';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ModalAddType from './modalTypes';

const MovementsWORow = ({
    id,
    item
}) => {
    const [isOpenAddType, setIsOpenAddType] = useState(false)

    return (<>
        <tr key={id}>
            <td style={{ textAlign: "center" }}>
                {moment(item.date).format("DD/MM/YYYY")}
            </td>
            <td style={{ textAlign: "center" }}>
                {item.receipt_number}
            </td>
            <td>
                {item.description}
            </td>
            <td>
                {item.concept}
            </td>
            <td style={{ textAlign: "right" }}>
                $ {numberFormat(item.amount)}
            </td>
            <td style={{ textAlign: "center" }}>
                <Button onClick={e => {
                    e.preventDefault()
                    setIsOpenAddType(true)
                }}>Asignar Tipo</Button>
            </td>
        </tr>
        <ModalAddType
            isOpen={isOpenAddType}
            toggle={() => setIsOpenAddType(!isOpenAddType)}
            item={item}
        />
    </>)
}

export default MovementsWORow