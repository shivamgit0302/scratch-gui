import React from 'react';
import PropTypes from 'prop-types';
import CollapsiblePanel from '../collapsible-panel/collapsible-panel';
import styles from './mobile-block-palette.css';

const MobileBlockPalette = ({
    categories,
    onBlockSelect
}) => {
    const [expandedCategory, setExpandedCategory] = React.useState(null);

    const handleCategoryToggle = (categoryId) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };

    return (
        <div className={styles.palette}>
            {categories.map(category => (
                <CollapsiblePanel
                    key={category.id}
                    title={category.name}
                    isExpanded={expandedCategory === category.id}
                    onToggle={() => handleCategoryToggle(category.id)}
                >
                    <div className={styles.blocks}>
                        {category.blocks.map(block => (
                            <button
                                key={block.id}
                                className={styles.block}
                                onClick={() => onBlockSelect(block)}
                            >
                                <img 
                                    src={block.icon} 
                                    alt={block.label}
                                    className={styles.blockIcon}
                                />
                                <span>{block.label}</span>
                            </button>
                        ))}
                    </div>
                </CollapsiblePanel>
            ))}
        </div>
    );
};

MobileBlockPalette.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        blocks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })).isRequired
    })).isRequired,
    onBlockSelect: PropTypes.func.isRequired
};

export default MobileBlockPalette;