import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";
import enLocaleData from 'react-intl/locale-data/en';
import localeEnMessages from "./locales/en";

addLocaleData(esLocaleData);
addLocaleData(enLocaleData);

const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

const messages = language.startsWith('es')?localeEsMessages:localeEnMessages;

ReactDOM.render(
	<IntlProvider locale={language} messages= {messages}>
		<JobsList lan={language}/>
	</IntlProvider>, document.getElementById("root")
);