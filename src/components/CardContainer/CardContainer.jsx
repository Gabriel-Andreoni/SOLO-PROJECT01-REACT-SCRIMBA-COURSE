import FooterContainer from '../FooterContainer/FooterContainer';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import './CardContainer.css';

export default function CardContainer() {
    return (
        <div className="card--container">
            <Header />
            <MainContent />
            <FooterContainer />
        </div>
    )
}