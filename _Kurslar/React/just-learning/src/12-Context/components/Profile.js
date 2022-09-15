import { useContext } from 'react';

import UserContext from '../UserContext.js';

export default
    function Profile() {
    const data = useContext(UserContext);

    return (
        <div>
            <code>{JSON.stringify(data)}</code>
        </div>
    );
}

