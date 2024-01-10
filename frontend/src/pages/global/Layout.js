import { Box } from '@mui/material';
import React from 'react'
import HeaderTop from './HeaderTop';
import SidebarAdm from './Sidebar';
/**
 * A higher-order component that wraps the main content with a layout structure.
 * It includes a sidebar, a top header, and the main content area.
 *
 * @function
 * @name Layout
 * @category Components
 *
 * @param {React.Component} Component - The main content component to be wrapped by the layout.
 * @returns {React.Component} - Returns the enhanced component with the layout structure.
 */

const Layout = (Component) => ({ ...props }) => {
        // Component receives the main content component as an argument


    return (
        <>
            <div style={{ display: 'flex', minHeight: "100vh" }}>
                <SidebarAdm />
                <Box sx={{ width: "100%", bgcolor: "#FFFFF" }}>
                    <HeaderTop />
                    <Box sx={{ p: 3 }}>
                        <Component {...props} />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Layout