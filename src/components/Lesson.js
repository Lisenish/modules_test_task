import PropTypes from 'prop-types';
import React from 'react';
import './Lesson.css';

const Lesson = ({ title }) => (
    <div className="Lesson">
        <svg className="Lesson__icon" width="15" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.8.8h13.4v11.4H.8V.8z" stroke="#03F" strokeWidth="1.5" /><path d="M6 13h3l1 4H5l1-4z" fill="#03F" /><path fill="#03F" d="M3 4h9v1.5H3zM3 7h9v1.5H3z" /></svg>
        <div className="Lesson__title"><a className="Lesson__link" href="#url">{title}</a></div>
        <button className="Module__action-button"><svg className="Module__button-icon" width="20" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H0v2h20V5zm0-5H0v2h20V0z" fill="#23171B" /></svg></button>
    </div>
);

Lesson.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Lesson;