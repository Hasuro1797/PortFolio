import { createContext, useState } from 'react';
import EnMessages from '../languages/en-US.json';
import EsMessages from '../languages/es-MX.json';
import {IntlProvider} from 'react-intl';

const langContext = createContext();

const LangProvider = ({children}) => {
	let localeDefault;
	let messageDefault;
	const lang = localStorage.getItem('lang');

	if(lang){
		messageDefault = lang

		if(lang === 'es-MX'){
			messageDefault = EsMessages;
		} else if(lang === 'en-US'){
			messageDefault = EnMessages
		} else {
			localeDefault = 'en-US'
			messageDefault = EnMessages
		}
	}

	const [messages, setMessages] = useState(messageDefault);
	const [locale, establecerLocale] = useState(localeDefault);

	const setLanguage = (language) => {
		switch (language){
			case 'es-MX':
				setMessages(EsMessages);
				establecerLocale('es-MX');
				localStorage.setItem('lang', 'es-MX');
				break;
			case 'en-US':
				setMessages(EnMessages);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
				break;
			default:
				setMessages(EnMessages);
				establecerLocale('en-US');
				localStorage.setItem('lang', 'en-US');
		}
	}

	return (
		<langContext.Provider value={{setLanguage: setLanguage}}>
			<IntlProvider locale={locale} messages={messages}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
export {LangProvider, langContext};