import './FooterContainer.css';
import twitterLogo from './../../../assets/twitter.png';
import facebookLogo from './../../../assets/facebook.png';
import instagramLogo from './../../../assets/instagram.png';
import githubLogo from './../../../assets/github.png'



export default function FooterContainer() {
    return (
        <footer className="footer--container">
            <div>
                <img src={twitterLogo} alt="" />
            </div>

            <div>
                <img src={facebookLogo} alt="" />
            </div>

            <div>
                <img src={instagramLogo} alt="" />
            </div>

            <div>
                <img src={githubLogo} alt="" />
            </div>
        </footer>
    )
}