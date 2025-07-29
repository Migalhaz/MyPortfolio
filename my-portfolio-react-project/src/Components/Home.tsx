import { useTranslation } from "react-i18next";
import { useState } from 'react';

function Home()
{
    const { t } = useTranslation();

    const cursor = ["_", "|", "▍", ">"]

    const [cursorIndex, setCursorIndex] = useState(0);

    function IncreaseCursorEditor(): void
    {
        setCursorIndex(prevIndex => (prevIndex+1)%cursor.length);
    }

    return( 
    <div className="Section Home Default-Background">
        <h1>{t('HomeSection.title')}</h1>
        <h2>{t('HomeSection.presentation')} <span className="Highlight">Miguel Guion</span>!</h2>
        <p>Software Developer<span className="Highlight Blinking" onClick={IncreaseCursorEditor}>{cursor[cursorIndex]}</span></p>
    </div>
    );
}

export default Home;