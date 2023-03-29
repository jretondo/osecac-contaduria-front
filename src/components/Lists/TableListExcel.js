import React from 'react'
import {
    Table
} from "reactstrap"

export const TableList = ({ titlesArray, children }) => {

    return (
        <Table className="align-items-center table-flush" responsive bordered>
            <thead className="thead-light">
                <tr>
                    {
                        titlesArray.map((title, key) => {
                            return (
                                <th key={key} scope="col" style={key % 2 === 0 ? { textAlign: "center" } : { textAlign: "center", background: "gray", color: "white" }}>{title}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody style={{ minHeight: "500px" }}  >
                {children}
            </tbody>
        </Table>
    )
}