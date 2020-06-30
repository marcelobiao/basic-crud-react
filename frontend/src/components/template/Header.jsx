import React from 'react'
import './Header.css'

export default props =>
    <aside className="header d-nome d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </aside>