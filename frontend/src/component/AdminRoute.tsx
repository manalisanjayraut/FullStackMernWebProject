import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
/**
 * Component for rendering routes accessible only to users with admin role.
 *
 * @component
 * @name AdminRoute
 * @param {Object} props - React component properties.
 * @param {ReactNode} props.children - The child components to be rendered within the AdminRoute.
 * @returns {ReactElement} - Returns the child components if the user has admin role; otherwise, redirects to the home page.
 */
interface AdminRouteProps {
    children: ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    const { userInfo } = useSelector((state: { signIn: { userInfo: { role: number } } }) => state.signIn);

    return userInfo && userInfo.role === 1 ? children : <Navigate to="/" />;
};
/**
 * React prop types for the AdminRoute component.
 *
 * @typedef {Object} AdminRouteProps
 * @property {ReactNode} children - The child components to be rendered within the AdminRoute.
 */

export default AdminRoute;
