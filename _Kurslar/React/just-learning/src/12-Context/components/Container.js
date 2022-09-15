import Button from './Button.js'
import Header from './Header.js'

import { useTheme } from '../ThemeContext.js'
import Profile from './Profile.js';

export default
    function Container() {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Header /><hr />
            <Button /> <hr />
            <Profile />
        </div>

    );
}

