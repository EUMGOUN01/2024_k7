import React from 'react';
import MyClockimg from './MyClockimg';
import MyClockTime from './MyClockTime';

function MyClock() {
    return (
        <div className="MyClock">
            <MyClockimg />
            <MyClockTime />
        </div>
    );
}

export default MyClock;