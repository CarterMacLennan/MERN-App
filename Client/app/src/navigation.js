import React from 'react'

export default function Navigation() {
    return (
        <div>
            <nav className="navbar bg-dark navbar-dark">
                <span className="navbar-brand mb-0 h1 text-warning">//todo</span>
                <span>
                    <button className="btn btn-md btn-secondary" type="button"><i class="far fa-trash-alt"></i></button>
                    <button className="btn btn-md btn-warning" type="button"><i class="fas fa-plus "></i></button>
                </span>
            </nav>
        </div>
    )
}
