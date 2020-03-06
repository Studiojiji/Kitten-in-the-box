import React from 'react'
import propTypes from 'prop-types';

const AppLayout = ({children}) => {
    return (
        <div>
            <header>
                <nav>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </nav>
            </header>
            {children}
        </div>
    )
}
AppLayout.propTypes = {
    children : propTypes.node
}

export default AppLayout
