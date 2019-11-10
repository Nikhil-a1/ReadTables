import React, { Component } from "react";
import { Table } from "react-bootstrap";
import CreateRows from "../CreateRows/CreateRows";
import CreateHeaders from "../CreateHeaders/CreateHeaders";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import "./CreateTable.css"

class CreateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                {
                    "columnHeaders": [
                        {
                            "id": "firstName",
                            "label": "First Name",
                            "sortable": "true",
                            "filterable": "true"
                        },
                        {
                            "id": "lastName",
                            "label": "Last Name",
                            "sortable": "true",
                            "filterable": "true"
                        },
                        {
                            "id": "dateOfBirth",
                            "label": "Date of Birth",
                            "sortable": "false",
                            "filterable": "true"
                        },
                        {
                            "id": "designation",
                            "label": "Designation",
                            "sortable": "true",
                            "filterable": "true"
                        },
                        {
                            "id": "department",
                            "label": "Department",
                            "sortable": "true",
                            "filterable": "true"
                        }
                    ],
                    "rowData": [
                        {
                            "id": "user_id_1",
                            "data": [
                                {
                                    "id": "firstName",
                                    "value": "John"
                                },
                                {
                                    "id": "lastName",
                                    "value": "Smith"
                                },
                                {
                                    "id": "dateOfBirth",
                                    "value": "07-11-1992"
                                },
                                {
                                    "id": "designation",
                                    "value": "Software Engineer"
                                },
                                {
                                    "id": "department",
                                    "value": "Web"
                                }
                            ]
                        },
                        {
                            "id": "user_id_2",
                            "data": [
                                {
                                    "id": "firstName",
                                    "value": "Jane"
                                },
                                {
                                    "id": "lastName",
                                    "value": "Doe"
                                },
                                {
                                    "id": "dateOfBirth",
                                    "value": "07-11-1995"
                                },
                                {
                                    "id": "designation",
                                    "value": "Intern"
                                },
                                {
                                    "id": "department",
                                    "value": "Mobile"
                                }
                            ]
                        },
                        {
                            "id": "user_id_3",
                            "data": [
                                {
                                    "id": "firstName",
                                    "value": "Bumrah"
                                },
                                {
                                    "id": "lastName",
                                    "value": "Jasprit"
                                },
                                {
                                    "id": "dateOfBirth",
                                    "value": "07-11-1995"
                                },
                                {
                                    "id": "designation",
                                    "value": "Employee"
                                },
                                {
                                    "id": "department",
                                    "value": "Sports"
                                }
                            ]
                        },
                        {
                            "id": "user_id_4",
                            "data": [
                                {
                                    "id": "firstName",
                                    "value": "kohli"
                                },
                                {
                                    "id": "lastName",
                                    "value": "Virat"
                                },
                                {
                                    "id": "dateOfBirth",
                                    "value": "07-11-1995"
                                },
                                {
                                    "id": "designation",
                                    "value": "Intern"
                                },
                                {
                                    "id": "department",
                                    "value": "Mobile"
                                }
                            ]
                        }
                    ]
                }
            ],
            isSearchPresent: false
        }
    }

    componentWillMount() {
        this.props.setTableData(this.state.tableData)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.tableData !== this.state.tableData) {
            this.setState({ tableData: nextProps.tableData });
            return true;
        }
        return false;
    }

    highlightText = (text) => {
        debugger;
        console.log(text);
    }

    search = (value) => {
        this.props.search(value);
        this.highlightText(this.props.list);
        debugger;
        this.props.setSearchPresent(true);
        console.log(this.props.list);
    }

    render() {
        return (
            <div>
                <input type="search" placeholder="search" onChange={(e) => { this.search(e.target.value) }} />
                {this.props.isSearchPresent ?
                    <Table id="table">
                        <thead>
                            <tr>
                                {
                                    this.state.tableData[0].columnHeaders.map((head, key = head.id) =>
                                        <CreateHeaders key={key} headers={head} />
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tableData[0].rowData.map((data, key = data.id) =>
                                    <CreateRows searchedText={this.props.list} key={key} data={data} />
                                )
                            }
                        </tbody>
                    </Table>
                    :
                    <Table id="table">
                        <thead>
                            <tr>
                                {
                                    this.state.tableData[0].columnHeaders.map((head, key = head.id) =>
                                        <CreateHeaders key={key} headers={head} />
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tableData[0].rowData.map((data, key = data.id) =>
                                    <CreateRows key={key} data={data} />
                                )
                            }
                        </tbody>
                    </Table>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tableData: state.data,
        list: state.searchList,
        isSearchPresent: state.isSearchPresent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTableData: (data) => dispatch(actions.setTableData(data)),
        search: (value) => dispatch(actions.search(value)),
        setSearchPresent: (val) => dispatch(actions.setSearchPresent(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);