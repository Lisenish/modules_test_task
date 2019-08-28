import React from 'react';
import './ModuleList.css';

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);

        props.loadModules();
    }

    render() {
        return (
            <div className="ModuleList">
                <h3 className="ModuleList__header">Modules</h3>
                <div>{this.props.children}</div>
            </div>
        )
    }
}