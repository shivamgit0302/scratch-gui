import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import {
    MOBILE_BREAKPOINT,
    TABLET_BREAKPOINT,
    MOBILE_LAYOUT,
    TABLET_LAYOUT,
    DESKTOP_LAYOUT
} from '../../lib/responsive-layout-constants';

const ResponsiveLayout = ({children}) => (
    <MediaQuery minWidth={TABLET_BREAKPOINT}>
        {isDesktop => (
            <MediaQuery minWidth={MOBILE_BREAKPOINT}>
                {isTablet => {
                    const layout = isDesktop ? DESKTOP_LAYOUT :
                        isTablet ? TABLET_LAYOUT : MOBILE_LAYOUT;
                    return children(layout);
                }}
            </MediaQuery>
        )}
    </MediaQuery>
);

ResponsiveLayout.propTypes = {
    children: PropTypes.func.isRequired
};

export default ResponsiveLayout;