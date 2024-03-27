/* import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

console.log("i18n");

const LANGUAGES = document.querySelector(".header__languages").children;

function applyTranslation() {
    console.log("applyTranslation");
    document.querySelector(".display__pause-title").innerHTML = i18next.t("pause-title");
}

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "./../../locales/{{lng}}/translation.json",
        },
    })
    .then(function (t) {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            i18next.changeLanguage(savedLanguage);
        }

        applyTranslation();
    });

for (const languageBtn of LANGUAGES) {
    languageBtn.addEventListener("click", function () {
        const language = languageBtn.dataset.language;
        i18next.changeLanguage(language, (err, t) => {
            if (err) return console.log("something went wrong loading", err);
            localStorage.setItem("language", language);
            applyTranslation();
        });
    });
}
 */
