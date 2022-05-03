import React from 'react'
import $ from 'jquery'; 
import "survey-core/modern.min.css";
import { Model,StylesManager} from "survey-core";
import { Survey } from "survey-react-ui";
import SurveyJson from './data.json'

StylesManager.applyTheme("modern");


function sendDataToServer(survey, options) {
	//Display information about sending data
	options.showDataSaving();
	$.ajax({
		url: 'https://script.google.com/macros/s/AKfycbxTO3WrbmUG2dy3iyA1N9X3y9Z3CXp6qqRw-xbpCkwEYynQaEVgA3oJxtYrHURbNY91Xg/exec',
		type: 'post',
		data: JSON.stringify(survey.data),
		//We need tell web app that we use plain text.
		headers: {
			"Content-Type": "text/plain"
		},
		processData: false,
		complete: function(res, status) {
			if (status === 'success') {
				//Show that data was send successfully
				options.showDataSavingSuccess();
			}else {
				//Display retry button in case of error
				options.showDataSavingError();
			}
		},
	});
}

export default function SurveyTag() {

    const survey = new Model(SurveyJson);
  survey.focusFirstQuestionAutomatic = true;
  survey.onComplete.add(sendDataToServer);


  return (
         <Survey model={survey} />  
  )
}

