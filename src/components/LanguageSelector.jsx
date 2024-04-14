import {useTranslation} from "react-i18next";

const languages = [
    {code: "en", lang: "EN"},
    {code: "dk", lang: "DK"},
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
                <ul className='flex justify-center items-center gap-x-[30px]'>
                <button className={lng.code === i18n.language ? "selected" : ""} 
                key={lng.code} 
                onClick={() => changeLanguage(lng.code)}
                >
                {lng.lang}
                </button>
                </ul>
            );
        })}
    </div>
    )
};

export default LanguageSelector;