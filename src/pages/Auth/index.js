import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { UserForm } from '../../components/UserForm';
import { RegisterMutation } from '../../requests/RegisterMutation';
import { LoginQuery } from '../../requests/LoginQuery';

export const Auth = ({ type }) => {
    return (
        <Fragment>
            {type == 'login' ? (
                <LoginQuery>
                    {({ loading, error, doLogin, data }) => (
                        <UserForm
                            title="Login"
                            error={error}
                            loading={loading}
                            onSubmit={doLogin}
                            data={data}
                        />
                    )}
                </LoginQuery>
            ) : (
                <RegisterMutation>
                    {({ loading, error, doRegister, data }) => (
                        <UserForm
                            title="Register"
                            error={error}
                            loading={loading}
                            onSubmit={doRegister}
                            data={data}
                        />
                    )}
                </RegisterMutation>
            )}
            ;
        </Fragment>
    );
};

Auth.propTypes = {
    type: PropTypes.string,
};
