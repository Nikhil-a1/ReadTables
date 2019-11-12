import React, { Component } from "react";
import { Table } from "react-bootstrap";
import CreateRows from "../CreateRows/CreateRows";
import CreateHeaders from "../CreateHeaders/CreateHeaders";
import "../CreateTable/CreateTable.css"

export default class CreateTableWithOutMarker extends Component {
    render() {
        return (
            <Table id="table">
                <thead>
                    <tr>
                        {
                            this.props.tableData[0].columnHeaders.map((head, key = head.id) =>
                                <CreateHeaders key={key} headers={head} />
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.tableData[0].rowData.map((data, key = data.id) =>
                            <CreateRows key={key} data={data} />
                        )
                    }
                </tbody>
            </Table>
        )
    }
}