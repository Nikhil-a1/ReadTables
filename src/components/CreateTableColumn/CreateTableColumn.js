import React, { Component } from "react";

class CreateTableColumn extends Component {

    render() {
        if (this.props.rowData) {
            var column =
                (
                    this.props.matchingText === this.props.rowData.value ?
                        <td style={{ color: "Blue" }}>
                            {this.props.rowData.value}
                        </td>
                        :
                        <td>
                            {this.props.rowData.value}
                        </td>
                )
        }
        return (
            [column]
        )
    }
}

export default CreateTableColumn;