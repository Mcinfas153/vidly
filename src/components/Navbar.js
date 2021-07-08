import React from 'react'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Vidly</span>
                    <button type="button" className="btn btn-primary">
                        Total Movies <span className="badge bg-secondary">{props.count}</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}
