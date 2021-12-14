import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
    const { id } = useParams();
    const user = useSelector((state) =>
        state.users.find((item) => item.id === id)
    );
    const loading = useSelector((state) => state.loading);
    console.log('users >>>', user);
    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: 100,
                    alignItems: 'center',
                }}
            >
                <CircularProgress color='secondary' />
            </div>
        );
    }

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div>
            test {id}
            {user.id}
            {user.firstName}
        </div>
    );
};

export default UserInfo;
