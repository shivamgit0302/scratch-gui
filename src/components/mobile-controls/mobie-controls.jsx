import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-controls.css';
import stopAllIcon from './icon--stop-all.svg';
import greenFlagIcon from './icon--green-flag.svg';



const MobileControls = ({onGreenFlag, onStop}) => (
    <div className={styles.mobileControls}>
        <button
            className={styles.controlButton}
            onClick={onGreenFlag}
        >
            <img src={greenFlagIcon} alt="Start" />
        </button>
        <button
            className={styles.controlButton}
            onClick={onStop}
        >
            <img src={stopAllIcon} alt="Stop" />
        </button>
    </div>
);

MobileControls.propTypes = {
    onGreenFlag: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired
};

export default MobileControls;