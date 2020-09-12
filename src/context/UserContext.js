import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
const Context = createContext();

export const UserContextProvider = ({ children }) => {
    let initialAT = '';
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState(initialAT);
    const [teamSelected, setTeamSelected] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const value = {
        accessToken,
        setAccessToken,
        teamSelected,
        setTeamSelected,
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;

UserContextProvider.propTypes = {
    children: PropTypes.node,
};
