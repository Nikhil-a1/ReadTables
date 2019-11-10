/*
    This file contains reducer which takes in state and action.
    This is the place where the actual data is modified using pure functions without state mutation.
*/
import * as actions from "../actions/actions"
export const initialState = {
    data: [],
    rows: [],
    headers: [],
    searchList: null,
    isSearchPresent: false
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_TABLE_DATA:
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        case actions.GET_HEADERS:
            const headers = state.headers.concat(state.data[0].columnHeaders)
            return {
                ...state,
                headers
            }
        case actions.GET_ROWS:
            const rows = state.rows.concat(state.data[0].rowData)
            return {
                ...state,
                rows
            }
        case actions.SORT_TABLE:
            const id = action.payload;
            const rowsData = state.data[0].rowData;
            const idValues = Array.from(getIdValues(rowsData, id));
            const sortedValues = idValues.sort();
            const sortedTable = getUpdatedTable(rowsData, sortedValues);
            const columnHeaders = state.data[0].columnHeaders;
            const newTable = [
                {
                    columnHeaders: columnHeaders,
                    rowData: sortedTable
                }
            ];
            return {
                ...state,
                data: [].concat(newTable)
            }
        case actions.SEARCH:
            const key = action.payload;
            const allRows = state.data[0].rowData;
            const match = returnMatch(allRows, key);
            return {
                ...state,
                searchList: match
            }
        case actions.SET_SEARCH_PRESENT:
            return {
                ...state,
                isSearchPresent: action.payload
            }
        default:
            return state;
    }
}

// returns the sorted table
const getUpdatedTable = (rows, sortedValues) => {
    let results = [];
    for (let i in sortedValues) {
        for (let e in rows) {
            let data = rows[e].data;
            for(let j in data) {
                if (sortedValues[i] === data[j].value) {
                    results.push(rows[e]);
                }
            }
        }
    }
    return results;
}

// returns the values of the table based on the column property user clicked
const getIdValues = (rowsData, id) => {
    let results = new Set();
    for (let i = 0; i < rowsData.length; i++) {
        let data = rowsData[i].data;
        for (let j = 0; j < data.length; j++) {
            if (data[j].id === id) {
                results.add(data[j].value);
            }
        }
    }
    return results;
}

// returns the matched the text present in the table
const returnMatch = (rows, key) => {
    for (let i = 0; i < rows.length; i++) {
        let data = rows[i].data;
        for (let j = 0; j < data.length; j++) {
            if (data[j].id.includes(key)) {
                return data[j].id;
            } else if (data[j].value.includes(key)) {
                return data[j].value;
            }
        }
    }
}