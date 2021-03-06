import { LocalizyLocalesProvider, LocalizyLocales, LocalesKey } from './generated-locales';
import { Locales, parseTranslationData } from 'localizy';

const translations = {
    en: parseTranslationData(require('./en.json')),
    ro: parseTranslationData(require('./ro.json')),
    ru: parseTranslationData(require('./ru.json')),
    bg: parseTranslationData(require('./bg.json')),
    hu: parseTranslationData(require('./hu.json')),
    cs: parseTranslationData(require('./cs.json')),
    it: parseTranslationData(require('./it.json')),
}

export class HoroscopeLocalesProvider extends LocalizyLocalesProvider<HoroscopeLocales> {
    constructor() {
        super({
            data: translations,
        })
    }

    createInstance(t: Locales) {
        return new HoroscopeLocales(t);
    }
}

export class HoroscopeLocales extends LocalizyLocales {
    signNameById(id: number) {
        return this.v(`sign_${id}` as LocalesKey);
    }

    langByCode(lang: string) {
        return this.v(`lang_${lang}` as LocalesKey);
    }
}
