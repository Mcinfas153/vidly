import _ from 'lodash'

export const Paginate = (items, currentPage, pageSize) => {
    const pageIndex = (currentPage - 1) * pageSize
    return _(items).slice(pageIndex).take(pageSize).value()
}

export const Slice = () => {
    const result = _.slice([1, 2, 3, 4, 5], 1, 4)
    console.log(result)
}