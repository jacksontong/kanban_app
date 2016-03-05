import React from 'react';
import AltContainer from 'alt-container';
import Lanes from './Lanes.jsx';
import LaneStore from '../stores/LaneStore';
import LaneActions from '../actions/LaneActions';

export default class App extends React.Component {
    /**
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <button className="add-lane" onClick={this.addLane}>+</button>
                <AltContainer
                    stores={[LaneStore]}
                    inject={{
                        lanes: () => LaneStore.getState().lanes
                    }}
                >
                    <Lanes />
                </AltContainer>
            </div>
        );
    }
    addLane() {
        LaneActions.create({name: 'New Lane'});
    }

}