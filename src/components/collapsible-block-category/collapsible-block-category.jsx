import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './collapsible-block-category.css';

const CollapsibleBlockCategory = ({
    name,
    blocks,
    isExpanded,
    onToggle,
    onBlockClick
}) => (
    <div className={styles.category}>
        <button
            className={classNames(styles.categoryHeader, {
                [styles.expanded]: isExpanded
            })}
            onClick={onToggle}
        >
            <span>{name}</span>
            <img
                src="/static/images/chevron-down.svg"
                alt={isExpanded ? 'Collapse' : 'Expand'}
                className={classNames(styles.chevron, {
                    [styles.expanded]: isExpanded
                })}
            />
        </button>
        {isExpanded && (
            <div className={styles.blocks}>
                {blocks.map(block => (
                    <button
                        key={block.id}
                        className={styles.block}
                        onClick={() => onBlockClick(block)}
                    >
                        {block.label}
                    </button>
                ))}
            </div>
        )}
    </div>
);

CollapsibleBlockCategory.propTypes = {
    name: PropTypes.string.isRequired,
    blocks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onBlockClick: PropTypes.func.isRequired
};

export default CollapsibleBlockCategory;