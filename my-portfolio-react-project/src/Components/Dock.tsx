import { useTranslation } from "react-i18next";

function Dock()
{
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const changeLanguage = (lng: string) => { i18n.changeLanguage(lng) };
    
    return(
    <div className="Dock-Background Light-Background">
        <div className="Section-Selector">
            <button className="Selection-Background"><h2>{t('Dock.home')}</h2></button>
            <button className="Selection-Background"><h2>{t('Dock.about')}</h2></button>
            <button className="Selection-Background"><h2>{t('Dock.projects')}</h2></button>
            <button className="Selection-Background"><h2>{t('Dock.contact')}</h2></button>
        </div>
        <div className="Language-Selector-Background">
            <button className="Language-Selector" onClick={() => changeLanguage('pt-BR')}></button>
            <button className="Language-Selector" onClick={() => changeLanguage('en-US')}></button>
        </div>
    </div>

    );
}

export default Dock;