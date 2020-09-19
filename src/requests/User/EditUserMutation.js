import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { useUser } from '../../hooks/useUser';
import { gqlEditUser } from '../graphql/gqlEditUser';
import PropTypes from 'prop-types';

export const EditUserMutation = ({ children }) => {
    const { currentUser } = useUser();
    const [editUser, { error, loading, data }] = useMutation(gqlEditUser, {
        onCompleted: () => {
            console.log('EditUserMutation', data);
        },
    });
    const doEditUser = useCallback((input) => {
        editUser({
            variables: {
                userId: currentUser._id,
                input: { ...input },
            },
        });
    });

    if (loading) {
        return 'loading edit user mutation...';
    }

    if (error) {
        console.error(error, 'error');
    }
    return children({ doEditUser, loading, error, data });
};

EditUserMutation.propTypes = {
    children: PropTypes.any,
};
