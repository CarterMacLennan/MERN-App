import React from 'react'

export default function Navigation() {
    const WEB_APP_NAME = "//todo";
    return (
        <div>
            <nav className="navbar bg-dark navbar-dark">
                <span className="navbar-brand mb-0 h1 text-warning">{WEB_APP_NAME}</span>
                <span>
                    <button className="btn btn-md btn-warning" type="button"><i className="fas fa-plus "></i></button>
                </span>
            </nav>
        </div>
    )
}
