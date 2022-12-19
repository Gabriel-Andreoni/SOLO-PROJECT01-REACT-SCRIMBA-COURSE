import ButtonContainer from '../ButtonContainer/ButtonContainer';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="header--photoContainer">
            </div>

            <div className="header--titleContainer">

                <h1>Gabriel Andreoni</h1>
                <h5>Front-end Developer</h5>
                <a href="mailto:gabriel.andreoni@hotmail.com?subject=Hello! I have a opportunity to you.">
                    <h6>gabriel.andreoni@hotmail.com</h6>
                </a>

                <ButtonContainer />
            </div>
        </header>

    )
}