import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-navigation.css';
import classNames from 'classnames';


const MobileNavigation = ({
    activeView,
    onViewChange,
    onMenuToggle
}) => (
    <nav className={styles.mobileNav}>
        <button
            className={classNames(styles.navButton, {
                [styles.active]: activeView === 'blocks'
            })}
            onClick={() => onViewChange('blocks')}
        >
            {/* <img src="/static/images/blocks-icon.svg" alt="Blocks" /> */}
            <span>Blocks</span>
        </button>
        <button
            className={classNames(styles.navButton, {
                [styles.active]: activeView === 'stage'
            })}
            onClick={() => onViewChange('stage')}
        >
            {/* <img src="/static/images/stage-icon.svg" alt="Stage" /> */}
            <span>Stage</span>
        </button>
        <button
            className={classNames(styles.navButton, {
                [styles.active]: activeView === 'sprites'
            })}
            onClick={() => onViewChange('sprites')}
        >
            {/* <img src="/static/images/sprites-icon.svg" alt="Sprites" /> */}
            <span>Sprites</span>
        </button>
        <button
            className={styles.navButton}
            onClick={onMenuToggle}
        >
            {/* <img src="/static/images/menu-icon.svg" alt="Menu" /> */}
            <span>Menu</span>
        </button>
    </nav>
);

MobileNavigation.propTypes = {
    activeView: PropTypes.oneOf(['blocks', 'stage', 'sprites']).isRequired,
    onViewChange: PropTypes.func.isRequired,
    onMenuToggle: PropTypes.func.isRequired
};

export default MobileNavigation;