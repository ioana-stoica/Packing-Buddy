import React from 'react';
import Animation from "./Animation.jsx";


class MiddleSection extends React.Component {
    render() {
        return (
            <section className={'middle-container'}>
                <Animation />
                <div className={'description'}>
                    <h3> Hi there! I am your packing buddy! </h3>
                    <p>Do you always find it hard to pack your luggage for your next adventure or you simply don’t have the time to think about it? Then this app is definitely for you!
                    </p>
                    <p>
                        Just answer a few questions about your trip and let me do the work. In a few minutes you will have a complete list to help you pack better and more efficiently. You can also personalize your list by editing or adding more items.
                    </p>
                    <div>Sounds good? Click <span style={{color: 'darkgreen'}}>START</span> to begin!</div>
                </div>
                <button className={'button'}> START </button>
            </section>
        );
    }
}

export default MiddleSection;