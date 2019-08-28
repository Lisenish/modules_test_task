import PropTypes from 'prop-types';
import React from 'react';
import Lesson from './Lesson';
import './Module.css';

const Module = ({ id, title, createdDate, isExpanded, lessons, className, onExpandToggleClick }) => (
    <div className={`Module ${className}`}>
        <div className={`Module__header ${isExpanded ? 'Module__header--expanded' : ''}`}>
            <div className="Module__left-column">
                <svg className="Module__icon" width="15" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0L0 4.044v.194l.131-.212L7.501 8l7.368-3.974.131.21v-.192L7.5 0zM8 9.067V17l7-4.067V5L8 9.067zM7 17l-7-4.067V5l7 4.068V17z" fill="#03F" /></svg>

                <div className="Module_info">
                    <div className="Module__title">{title}</div>
                    <div className="Module__created-at">Created at <span className="Module__date">{createdDate.toISOString().slice(0, 10)}</span></div>
                </div>
            </div>

            <div className="Module__action-buttons">
                <button className="Module__action-button"><svg className="Module__button-icon" width="20" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H0v2h20V5zm0-5H0v2h20V0z" fill="#23171B" /></svg></button>
                <button className="Module__action-button" onClick={() => onExpandToggleClick(id)}><svg className="Module__button-icon" width="17" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 6.4l6-6L16 2.1 8.6 9.5l-.2.1L.9 2.1 2.6.5l5.9 5.9z" fill="#23171B" /></svg></button>
            </div>
        </div>

        {lessons.length > 0 && isExpanded &&
            <div className="Module__lessons">
                {lessons.map(lesson =>
                    <Lesson
                        key={lesson.id}
                        title={lesson.title} />
                )}
            </div>

        }
    </div>
);

Module.propTypes = {
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    lessons: PropTypes.array.isRequired,
    onExpandToggleClick: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool,
    className: PropTypes.string
}

export default Module;