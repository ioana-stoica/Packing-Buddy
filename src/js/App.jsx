import React from 'react';
import Header from "./Header.jsx";
import MiddleSection from "./MiddleSection.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
    render() {
        return (
            <div className={'main-container'}>
                <Header />
                <MiddleSection />
                <Footer />
            </div>
        )
    }
}

export default App;
