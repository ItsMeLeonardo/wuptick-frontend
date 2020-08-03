import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
const Context = createContext();

export const UserContextProvider = ({ children }) => {
    let initialAT = '';
    const [accessToken, setAccessToken] = useState(initialAT);

    const value = {
        accessToken,
        setAccessToken,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

UserContextProvider.propTypes = {
    children: PropTypes.node,
};