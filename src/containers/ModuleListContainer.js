import React from "react";
import { connect } from 'react-redux';
import { loadModules, toggleModuleExpand } from '../actions';
import Module from '../components/Module';
import ModuleList from '../components/ModuleList';

const ModuleListContainer = ({ modules, loadModules, toggleModuleExpand }) => (
    <ModuleList
        loadModules={loadModules}>

        {modules.map(module =>
            <Module
                className="ModuleList__module"
                key={module.id}
                id={module.id}
                title={module.title}
                isExpanded={module.isExpanded}
                createdDate={new Date()}
                lessons={module.lessons}
                onExpandToggleClick={toggleModuleExpand} />
        )}
    </ModuleList>
);

const mapStateToProps = state => ({
    modules: state.modules,
})

export default connect(
    mapStateToProps,
    { loadModules, toggleModuleExpand }
)(ModuleListContainer)