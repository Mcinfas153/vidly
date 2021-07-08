import React from 'react'
import _ from 'lodash'

export default function Pagination(props) {

    const { count, pageSize, handleChangePage, currentPage } = props
    const pages = Math.ceil(count / pageSize)
    if (pages === 1) return null
    const paginationPage = _.range(1, pages + 1)

    return (
        <div className="pagination">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    {
                        paginationPage.map(page => <li key={page} className={`page-item ${(page === currentPage) ? "active" : ""}`}><a className="page-link" onClick={() => handleChangePage(page)}>{page}</a></li>)
                    }

                </ul>
            </nav>
        </div>
    )
}
