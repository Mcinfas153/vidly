import React from 'react'

export default function Movie(props) {

    const { id, title, genre, stock, rate } = props

    return (
        <React.Fragment>
            <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{genre}</td>
                <td>{stock}</td>
                <td>{rate}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={() => props.deleteMovie(id)}>Delete</button>
                </td>
            </tr>
        </React.Fragment>
    )
}
