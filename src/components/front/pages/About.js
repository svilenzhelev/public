import React, { useEffect } from 'react';

import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { Wrapper, MainContent } from '../Front';

export default props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let metaTitle = "Кампанията | Ти Броиш";
    let metaUrl = "https://tibroish.bg/about/";
    let metaDescription = `
        „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации 
        при броенето на гласовете на предстоящите парламентарни избори.
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
                <h1>За кампанията</h1>
                <hr/>
                <h2>Какво е „Ти броиш“?</h2>
                <p>
                    „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации при броенето 
                    на гласовете на предстоящите парламентарни избори.
                </p>
                <p>
                    За целта търсим 12 000 души &ndash; колкото са изборните секции в страната – които да присъстват при 
                    броенето на бюлетините в изборния ден, да следят за тяхното честно преброяване и за коректното 
                    вписване на резултатите в протоколите.
                </p>
                <p>
                    В изборното законодателство тези хора се наричат „застъпници“ и това им дава право да получат 
                    копие от протокола на изборната секция. 
                </p>
                <p>
                    След това тяхна задача е да снимат копието и да го качат в специално създаденото мобилно 
                    приложение „Ти броиш“. Така нашият паралелен преброителен център ще може да обработи 
                    резултатите и да ги качи в реално време на сайта ни.
                </p>
                <p>
                    Искаме всеки български гражданин да може да види реалните резултати от изборите, преди те да са 
                    стигнали до Централната избирателна комисия, преди да са претърпели неправомерни промени и опити за манипулации.   
                </p>
                <hr/>
                <h2>Защо е необходимо гражданско паралелно преброяване?</h2>
                <p>
                    Опитът ни показва, че най-големите манипулации с вота на гражданите се случват при отварянето 
                    на бюлетините, броенето на гласовете и попълването на протоколите.
                </p>
                <p>Единственият начин това да бъде предотвратено е да изпратим във всяка изборна секция по един 
                    силно мотивиран човек, готов да защити честността на вота.
                </p>
                <p>
                    Наричаме тези 12 000 души „гаранти на демокрацията“, защото, освен че могат да присъстват на 
                    броенето на гласовете, те имат право да сигнализират за всякакви нередности и опити за измами, 
                    за да се преборят всеки един глас да бъде коректно отчетен.  
                </p>
                <hr/>
                <h2>Как да стана застъпник?</h2>
                <p>
                    Записването за текущата кампания е приключило.
                </p>
                <p>
                    От Вас се иска силна мотивация да станете гарант на честните избори в България и да отделите около 4 часа от 
                    времето си в изборния ден. Ангажиментът на участниците в „Ти броиш“ е да влязат в секцията най-късно 1 
                    час преди нейното затваряне и да останат до края на броенето на бюлетините и попълването на протоколите.
                </p>
                <p>
                    От нас ще получите достъп до екип от експерти и юристи, които ще бъдат на разположение във всеки един момент 
                    от изборния ден, за да консултират и съдействат на всички застъпници на Демократична България при 
                    възникнали въпроси или сигнали за нередности.
                </p>
                <p>
                    Важно е да уточним, че разчитаме на Вашата лична и гражданска мотивация, защото включването Ви в Националната 
                    кампания „Ти броиш“ е доброволен избор, за който не се предвижда заплащане.
                </p>
                <hr/>
                <h2>Какво трябва да направя в изборния ден?</h2>
                <p>
                    Достатъчно е да отидете в изборната секция, в която ще гарантирате честното преброяване на 
                    гласовете, един час преди тя да затвори. 
                </p>
                <p>
                    Трябва да останете в секцията, докато всички гласове бъдат преброени и протоколите &mdash; попълнени. След като 
                    се уверите, че гласовете са правилно преброени и нанесени в протоколите, Вие трябва да получите копие от 
                    протокола и ангажиментът Ви в изборната секция приключва.
                </p>
                <p>
                    Остава само да снимате протокола и да го качите в приложението „Ти броиш“, до което ще получите достъп 
                    преди изборите. Това е всичко!
                    Нашият преброителен център ще обработи данните в протоколите, след което ще ги качи на сайта ни. 
                </p>
                <hr/>
                <h2>Кой може да се включи в инициативата?</h2>
                <p>
                    Всеки български гражданин, който иска да стане гарант за честни и свободни избори. Всеки, който вярва, 
                    че България може много повече, е добре дошъл!
                </p>
                <p>
                    Не е необходимо да сте член на някоя от партиите в „Демократична България“, за да се включите. Все пак, 
                    имайте предвид, че националната кампания „Ти броиш“ се организира от „Демократична България - обединение“ и 
                    формалната Ви роля ще бъде на наш застъпник. 
                </p>
                <hr/>
                <h1>Какво предстои след като се запишете за защитник на вота?</h1>
                <hr/>
                <h2>Ще ви изпратим обучително видео и материали</h2>
                <p>
                    В момента, в който ЦИК обявят здравния протокол и методически указания за предстоящите избори, ще изработим и 
                    изпратим обучително видео и материали за правата и задълженията на застъпниците. Всички тези материали ще бъдат на 
                    Ваше разположение и на сайта на кампанията - <a href="https://tibroish.bg">www.tibroish.bg</a>.
                </p>
                <hr/>
                <h2>Ще ви разпределим по секции</h2>
                <p>
                    След като общините обявят окончателния списък със секциите за предстоящите избори, ще бъдете разпределени в някоя 
                    от тях и ще Ви изпратим информация за номера и адреса на секцията, в която ще бъдете застъпник.
                </p>
                <hr/>
                <h2>Ще подготвим документите</h2>
                <p>
                    За да можете да се легитимирате като пазител на вота в изборния ден, ще трябва да разполагате с документ, който удостоверява, 
                    че сте застъпник (представител на коалиция) на Демократична България и бадж, който ще трябва да носите, докато сте в секцията. 
                    Веднага щом бъдете разпределени в секциите, ще се свържем с Вас, за да уточним как ще получите документите си.
                </p>
                <hr/>
                <h2>Приложението “Ти броиш” </h2>
                <p>
                    Когато мобилното ни приложение е налично за сваляне, ще получите имейл с инструкции как да го свалите и как да го ползвате в изборния 
                    ден. Тази информация ще бъде публикувана и на уебсайта на кампанията <a href="https://tibroish.bg">www.tibroish.bg</a>.
                </p>
            </MainContent>
        </Wrapper>
    )
};
