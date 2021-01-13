import React from 'react';

import { BrowserRouter, StaticRouter } from 'react-router-dom';

import Main from './Main';

export default props => {
    return(
        window.ssr?
            <StaticRouter context={{}} location={props.staticProps.path}>
                <Main/>
            </StaticRouter> :
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
    )
};