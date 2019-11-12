import React, { Component } from "react";

class CreateTableColumn extends Component {

    render() {
        if (this.props.rowData) {
            var column =
                (
                    this.props.matchingText === this.props.rowData.value ?
                        <th style={{ color: "Blue" }}>
                            {this.props.rowData.value}
                        </th>
                        :
                        <th>
                            {this.props.rowData.value}
                        </th>
                )
        }
        return (
            [column]
        )
    }
}

export default CreateTableColumn;