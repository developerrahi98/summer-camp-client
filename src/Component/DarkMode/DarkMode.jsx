
import sun from "./Sun.svg";
import moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
    }
    const toogleTheme = (e) => {
        if (e.target.checked){
            setDarkMode();
        }
        else {setLightMode();}
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toogleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                
            </label>
        </div>
    );
};

export default DarkMode;
