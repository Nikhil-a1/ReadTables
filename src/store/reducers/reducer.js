import * as actions from "../actions/actions"

export const initialState = {
    data: [],
    rows: [],
    headers: [],
    matchingText: null,
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
            if (match !== null) {
                return {
                    ...state,
                    matchingText: key,
                    isSearchPresent: true
                }
            } else {
                return {
                    ...state,
                    matchingText: null,
                    isSearchPresent: false
                }
            }
        default:
            return state;
    }
}

const getUpdatedTable = (rows, sortedValues) => {
    let results = [];
    for (let i in sortedValues) {
        for (let e in rows) {
            let data = rows[e].data;
            for (let j in data) {
                if (sortedValues[i] === data[j].value) {
                    results.push(rows[e]);
                }
            }
        }
    }
    return results;
}

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

const returnMatch = (rows, key) => {
    for (let i = 0; i < rows.length; i++) {
        let data = rows[i].data;
        for (let j = 0; j < data.length; j++) {
            if (data[j].value.includes(key)) {
                return data[j].value;
            }
        }
    }
}