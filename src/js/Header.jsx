import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <>
                <header>
                    <div className={'logo-container'}> <img className={'logo'} src={"assets/images/logo-packing-buddy.png"} alt={'logo'} /> </div>
                    <nav>
                        <div> Menu </div>
                        <img className={'menu-icon'} src={"assets/images/menu-clouds.png"} alt={'menu-icon'} />
                    </nav>
                </header>

                </>
        );
    }
}

export default Header;