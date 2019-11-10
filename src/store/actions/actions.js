export const SET_TABLE_DATA = "SET_TABLE_DATA";
export const GET_HEADERS = "GET_HEADERS";
export const GET_ROWS = "GET_ROWS";
export const SORT_TABLE = "SORT_TABLE";
export const SEARCH = "SEARCH";
export const SET_SEARCH_PRESENT = "SET_SEARCH_PRESENT"

export const setTableData = (data) => {
    return {
        type: "SET_TABLE_DATA",
        payload: data
    }
}

export const getHeaders = () => {
    return {
        type: "GET_HEADERS"
    }
}


export const getRows = () => {
    return {
        type: "GET_ROWS"
    }
}

export const sortTableData = (id) => {
    return {
        type: "SORT_TABLE",
        payload: id
    }
}

export const search = (value) => {
    return {
        type: "SEARCH",
        payload: value
    }
}

export const setSearchPresent = (value) => {
    return {
        type: "SET_SEARCH_PRESENT",
        payload: value
    }
}