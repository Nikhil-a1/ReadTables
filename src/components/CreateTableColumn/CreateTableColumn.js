import React, { Component } from "react";

class CreateTableColumn extends Component {

    render() {
        if (this.props.rowData) {
            var column =
                (
                    this.props.searchedText === this.props.rowData.value ?
                        <th style={{ color: "yellow" }}>
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