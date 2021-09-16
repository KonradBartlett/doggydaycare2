import './footer.scss';

export const Footer = () => {
    return (
        <div className="footer">
            <Links/>
        </div>
    );
}

export const Links = () => {
    return (
        <div>
            <p>Website by: <a className="dark_hover" href="https://konradbartlett.com/" target="_blank" rel="noopener noreferrer nofollow">Konrad Bartlett</a></p>
        </div>
    );
};