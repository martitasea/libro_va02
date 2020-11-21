import React from 'react';

const AuthContext =React.createContext("default Context")

const AuthProvider=AuthContext.Provider
const AuthConsumer=AuthContext.Consumer

export {AuthProvider, AuthConsumer};
export default AuthContext;