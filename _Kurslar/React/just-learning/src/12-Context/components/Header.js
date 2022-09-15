import { useTheme } from '../ThemeContext.js'

export default function Header() {

    const { theme, setTheme } = useTheme();

    return (
        <div>
            Active Theme: {theme}<br />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
    );

}