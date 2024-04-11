import {useTranslation} from "react-i18next";

const languages = [
    {code: "en", lang: "English"},
    {code: "dk", lang: "Danish"},
];

const LanguageSelector = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    };

    return (
    <div>
        {languages.map((lng) => {
            return (
                <button className={lng.code === i18n.language ? "selected" : ""} 
                key={lng.code} 
                onClick={() => changeLanguage(lng.code)}
                >
                {lng.lang}
                </button>
            );
        })}
    </div>
    )
};

export default LanguageSelector;