import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-menu.css';

const MobileMenu = ({
    onClose,
    onSave,
    onShare,
    onSeeCommunity,
    // Add other menu actions as needed
}) => (
    <div className={styles.mobileMenu}>
        <div className={styles.menuHeader}>
            <h2>Menu</h2>
            <button
                className={styles.closeButton}
                onClick={onClose}
            >
                <img src="/static/images/close.svg" alt="Close" />
            </button>
        </div>
        <div className={styles.menuItems}>
            <button onClick={onSave}>Save</button>
            <button onClick={onShare}>Share</button>
            <button onClick={onSeeCommunity}>Community</button>
            {/* Add other menu items as needed */}
        </div>
    </div>
);

MobileMenu.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onShare: PropTypes.func.isRequired,
    onSeeCommunity: PropTypes.func.isRequired
};

export default MobileMenu;