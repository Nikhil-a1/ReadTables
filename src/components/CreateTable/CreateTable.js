import React, { PureComponent } from "react";
// import { Table } from "react-bootstrap";
// import CreateRows from "../CreateRows/CreateRows";
// import CreateHeaders from "../CreateHeaders/CreateHeaders";
import CreateTableWithMarkers from "../CreateTableWithMarker/CreateTableWithMarker";
import CreateTableWithOutMarkers from "../CreateTableWithOutMarker/CreateTableWithOutMarker";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import "./CreateTable.css"

class CreateTable extends PureComponent {
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
            isSearchPresent: false,
            matchingText: null
        }
    }

    componentDidMount() {
        this.props.setTableData(this.state.tableData)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.matchingText !== this.props.matchingText) {
            this.setState({
                isSearchPresent: this.props.isSearchPresent,
                matchingText: this.props.matchingText
            });
        }
        if(prevProps.tableData !== this.props.tableData) {
            this.setState({tableData: this.props.tableData});
        }
    }

    onInputChange = (value) => {
        this.props.search(value);
    }

    render() {
        return (
            <div>
                <input type="search" placeholder="search" onChange={(e) => { this.onInputChange(e.target.value) }} />
                {
                    this.props.isSearchPresent ?
                    <CreateTableWithMarkers matchingText={this.props.matchingText} tableData={this.state.tableData} />
                    :
                    <CreateTableWithOutMarkers tableData={this.state.tableData} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tableData: state.data,
        matchingText: state.matchingText,
        isSearchPresent: state.isSearchPresent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTableData: (data) => dispatch(actions.setTableData(data)),
        search: (value) => dispatch(actions.search(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTable);