import './ButtonContainer.css';

import linkedinLogo from './../../../assets/linkedin.png';

import mailLogo from '../../../assets/email.png';

export default function ButtonContainer() {
    return (
        <div className="button--container">
            <button className="button button--email">
                <img src={mailLogo} />
                <a href="mailto:gabriel.andreoni@hotmail.com?subject=Hello! I have a opportunity to you.">
                    <p>Email</p>
                </a>
            </button>

            <button className="button button--linkedin">
                <img src={linkedinLogo} />
                <a href="https://www.linkedin.com/in/gabriel-andreoni-720784212/" target='_blank' rel='external' >
                    <p>LinkedIn</p>
                </a>
            </button>
        </div>
    )
}