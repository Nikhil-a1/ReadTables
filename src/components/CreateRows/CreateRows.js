import React, { Component } from "react";
import CreateTableColumn from "../CreateTableColumn/CreateTableColumn";
import { connect } from "react-redux";

class CreateRows extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            rows: []
        }
    }

    render() {
        var row;
        if (this.state.data) {
            row = this.props.data;
        }
        var renderRows = row.data.map((r, key=r.id) =>
             <CreateTableColumn searchedText={this.props.searchedText} key = {key} rowData={r} />
        )
        return (
            <tr>
                {
                    renderRows
                }
            </tr>
            
        )
    }
}

export default connect(null, null)(CreateRows);