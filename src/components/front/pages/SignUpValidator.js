import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

import styled from 'styled-components';

const FormWrapper = styled.div`
    iframe {
        width: 100%;
        height: 500px;
    }
`;

export default () => {

    /*useEffect(() => {
        window.scrollTo(0, 0);

        var eventMethod = window.addEventListener
			? "addEventListener"
            : "attachEvent";
        
        var eventer = window[eventMethod];
        var messageEvent = eventMethod === "attachEvent"
            ? "onmessage"
            : "message";

        const formSubmitHandler = e => {
            if (e.data === "formSubmit" || e.message === "formSubmit") {
                window.gtag && gtag('event', 'conversion', {
                    'send_to': 'AW-859816919/zYXnCPLNwOgBENeH_5kD',
                });
            }
        };

        eventer(messageEvent, formSubmitHandler);

        return () => {
            var cleanupMethod = window.addEventListener
                ? "removeEventListener"
                : "detachEvent";
            var cleanup = window[cleanupMethod];
            cleanup(messageEvent, formSubmitHandler);
        };
    }, []);*/

    let metaTitle = "Запиши се като валидатор | Ти Броиш";
    let metaUrl = "https://tibroish.bg/signup-validator/";
    let metaDescription = `
        За да дадем на България шанс за честни и свободни избори, търсим 12 000 защитници на вота, 
        които да следят за коректното преброяване на всички гласове в изборния ден. По един за всяка секция 
        в страната. Ангажимент за няколко часа в края на изборния ден може да реши бъдещето на България 
        за следващите години. Можем да го направим заедно!  
    `;

    return(
        <Wrapper>
            <Helmet>
                <title>{metaTitle}</title>
                <link rel="canonical" href={metaUrl} />
                <meta name="description" content={metaDescription}/>
                <meta property="og:url" content={metaUrl}/>
                <meta property="og:title" content={metaTitle}/>
                <meta property="og:description" content={metaDescription}/>
                <meta property="og:image" content={"/brand/og_image.png"}/>
                <meta property="og:image:width" content={"1200"}/>
                <meta property="og:image:height" content={"628"}/>
            </Helmet>
            <MainContent>
                <h1>Записване за валидатор</h1>
                <hr/>
                <FormWrapper>
                    <iframe id="gform" style={{border: 'none'}} src="https://dabulgaria.bg/tibroish-validator-embed/">Loading...</iframe>
                </FormWrapper>
            </MainContent>
        </Wrapper>
    )
}
