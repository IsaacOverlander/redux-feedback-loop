import React, {Component} from 'react';

class FeelingView extends Component {

    render () {
        return (
            <div>
                <h3>Page 1 of 4</h3>
                <br />
                <form>
                    <label>How are you feeling today?</label>
                    <input type="number"></input>
                    <br />
                    <button type="submit">Next</button>
                </form>
            </div> 
        );
    };
};

export default FeelingView;