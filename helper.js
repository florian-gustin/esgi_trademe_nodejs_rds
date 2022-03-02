function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

function sum(a, b) {
    return a + b;
}

module.exports = {
    getOffset,
    emptyOrRows,
    sum
}