import React from 'react';
import { connect } from 'react-redux';
import { loadModules } from '../actions';
import './ReloadButton.css';

function ReloadButton({ className, onClick }) {
    return (
        <div className={`ReloadButton ${className}`} onClick={onClick}>
            <span className="ReloadButton__text">Reload content</span>
            <svg className="ReloadButton__icon" width="13" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" d="M2.5.5h10v12h-10z" /><path fill="#03F" stroke="#fff" d="M.5 2.5h10v12H.5z" /><path fill="#fff" d="M2 5h6.9v1.1H2zM2 8h6.9v1.1H2zM2 11h7v1H2z" /></svg>
        </div>
    );
}

export default connect(null, { onClick: loadModules })(ReloadButton)