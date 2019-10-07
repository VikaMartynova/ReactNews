import React, {Component} from 'react';

export class ScrollButton extends Component {

    state = {
        intervalId: 0
    };

    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    };

    scrollToTop = () => {
        const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    };

    render () {
        return <button title='Back to top' className='scroll-btn'
                       onClick={() => {this.scrollToTop()}}>
            <span className="arrow-up"></span>
        </button>;
    }
}