import React from 'react';
import { multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const first=13;
    const second=15;
    const multiply1=multiply(first,second);
    return (
        <div>
            <h3>This is Shoes Components</h3>
            <p>Total:{multiply1}</p>
        </div>
    );
};

export default Shoes;