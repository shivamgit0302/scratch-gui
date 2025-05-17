import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './collapsible-panel.css';

const CollapsiblePanel = ({
    title,
    isExpanded,
    onToggle,
    children
}) => (
    <div className={styles.panel}>
        <button
            className={classNames(styles.panelHeader, {
                [styles.expanded]: isExpanded
            })}
            onClick={onToggle}
        >
            <span>{title}</span>
            <img
                src="/static/images/chevron-down.svg"
                alt={isExpanded ? 'Collapse' : 'Expand'}
                className={classNames(styles.chevron, {
                    [styles.expanded]: isExpanded
                })}
            />
        </button>
        <div 
            className={classNames(styles.panelContent, {
                [styles.expanded]: isExpanded
            })}
        >
            {children}
        </div>
    </div>
);

CollapsiblePanel.propTypes = {
    title: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default CollapsiblePanel;