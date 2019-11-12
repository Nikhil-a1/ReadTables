import React, { Component } from "react";
import * as actions from "../../store/actions/actions";
import { connect } from "react-redux";

class CreateHeaders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    checkForSortable = (header) => {
        if (header.sortable === "true") {
            this.props.sortTableData(header.id);
        } 
        // else {
        //     return (
        //         <div>
        //             <Toast show={true} variant="danger">
        //                 <Toast.Body>sort is not enabled on this property</Toast.Body>
        //             </Toast>
        //         </div>
        //     )
        // }
    }

    render() {
        return (
            <th onClick={() => { this.checkForSortable(this.props.headers) }}>
                {
                    this.props.headers.label
                }
            </th>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sortTableData: (headerId) => dispatch(actions.sortTableData(headerId))
    }
}

export default connect(null, mapDispatchToProps)(CreateHeaders);