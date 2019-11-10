/* 
    CreateTableColumn component is used to create a 'th' and a prop searchedText is passed to this 
    component that matches the searched text with the table and we highlight with separate styling
*/
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