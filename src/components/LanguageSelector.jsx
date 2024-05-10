import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";

const languages = [
    { code: "en", countryCode: "GB" },
    { code: "dk", countryCode: "DK" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex justify-center items-center gap-x-4">
            {languages.map((lng) => (
                <button
                    key={lng.code}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md border ${
                        lng.code === i18n.language ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => changeLanguage(lng.code)}
                >
                    <FlagIcon code={lng.countryCode} size={24} />
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
