import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './mobile-layout.css';

const MobileLayout = ({
    activeTab,
    onTabChange,
    children
}) => {
    const tabs = [
        { id: 'blocks', label: 'Blocks', icon: 'blocks-icon.svg' },
        { id: 'stage', label: 'Stage', icon: 'stage-icon.svg' },
        { id: 'sprites', label: 'Sprites', icon: 'sprites-icon.svg' }
    ];

    return (
        <div className={styles.mobileLayout}>
            {/* Main Content Area */}
            <div className={styles.content}>
                {children}
            </div>

            {/* Bottom Tab Navigation */}
            <nav className={styles.tabBar}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={classNames(styles.tabButton, {
                            [styles.active]: activeTab === tab.id
                        })}
                        onClick={() => onTabChange(tab.id)}
                    >
                        <img 
                            src={`/static/images/${tab.icon}`} 
                            alt={tab.label}
                            className={styles.tabIcon}
                        />
                        <span className={styles.tabLabel}>{tab.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

MobileLayout.propTypes = {
    activeTab: PropTypes.oneOf(['blocks', 'stage', 'sprites']).isRequired,
    onTabChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default MobileLayout;