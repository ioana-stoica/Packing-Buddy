import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <div>About</div>
                    <img className={'icons'} src={"assets/images/location-icon.png"} alt={'location'} />
                </div>
                <div>
                    <div>Contact</div>
                    <img className={'icons'} src={"assets/images/gmail-icon.png"} alt={'gmail'} />
                </div>
                <div className="break"></div>
                <img className={'icons'} src={"assets/images/facebook-icon.png"} alt={'facebook'} />
                <img className={'icons'} src={"assets/images/ig-icon.png"} alt={'ig'} />
                <img className={'icons'} src={"assets/images/github-icon.png"} alt={'ghithub'} />
                <img className={'icons'} src={"assets/images/react-icon.png"} alt={'react'} />
            </footer>
        );
    }
}

export default Footer;