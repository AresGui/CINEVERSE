import React, { useState, useEffect, createContext } from 'react'


export const AuthenticatedContext = createContext();

export const Authentication = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);

    return (
        <AuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {props.children}
        </AuthenticatedContext.Provider>
    );
};

