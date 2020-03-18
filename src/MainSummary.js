import React from 'react';
import CartTotal from './CartTotal';
import Summary from './Summary';

function MainSummary({selected}){
    return(
        <section className="main__summary">
						<h2>Your cart</h2>
						<Summary selected={selected} />
						<CartTotal selected={selected} />
					</section>
    )
}

export default MainSummary;