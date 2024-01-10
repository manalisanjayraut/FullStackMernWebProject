import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
/**
 * A route wrapper component for user-specific routes.
 *
 * @component
 * @name UserRoute
 *
 * @param {Object} props - The properties of the component.
 * @param {ReactNode} props.children - The child components to be rendered if the user is authenticated.
 * @returns {ReactElement} - Returns the child components if the user is authenticated, otherwise redirects to the home page.
 */

const UserRoute = ({ children }) => {
        // Get user information from Redux store
    const { userInfo } = useSelector((state) => state.signIn);
      // Check if the user is authenticated

    return userInfo ? children : <Navigate to="/" />;
}

export default UserRoute