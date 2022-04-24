import './App.css';
import React from 'react';
import $ from 'jquery'; 
import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import Bus from '../src/assets/Bus_1.png'
StylesManager.applyTheme("modern");


const surveyJson = {
  name: "Basic Information",
  questionTitleLocation: "hidden",
  showQuestionNumbers: "off",
  pages: [{
    name: "PersonalDetails",
    elements: [{
      type: "text",
      name: "FirstName",
      title: "First name:",
      isRequired: true,
    }, {
      type: "text",
      name: "LastName",
      title: "Last name:",
      isRequired: true,
    }, 
    {
      type: "text",
      name: "Address",
      title: "Address:",
      isRequired: true,
    }, 
    {
      type: "text",
      name: "PhoneNo",
      inputType: "tel",
      title: "Phone No:",
      isRequired: true,
    }, 
    {
      type: "panel",
      name: "Contacts",
      showQuestionNumbers: "off",
      state: "collapsed",
      title: "Contacts",
      elements: [{
        type: "text",
        name: "Email",
        inputType: "email",
        title: "Email:",
        validators: [
          {
              "type": "email"
          }
        ]
      }, {
        type: "text",
        name: "GitHub",
        title: "GitHub"
      }]
    }]
  }]
};



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

function App() {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;
  survey.onComplete.add(sendDataToServer);
  
  survey.onAfterRenderQuestionInput
  .add(function (sender, opt) {
      var el = opt.htmlElement;
      var question = opt.question;
      if (question.getType() === 'text') {
          var label = document.createElement('label');
          label
              .classList
              .add('bmd-label-floating');
          label.innerHTML = question.locTitle.textOrHtml;
          el
              .parentNode
              .insertBefore(label, el);
      }
  });
  

  return (
        <div className='md:mx-auto bg-cyan-green sm:h-full'>
            <div className='w-full h-full'>
              <img src={Bus} alt="logo-bus" className='mx-auto p-2 bg-cover'/>
            </div>
            <div className='md:container mx-auto p-5'>
                  <div className='bg-card-grey p-2 rounded-2xl m-2 lg:p-10 shadow-2xl mx-auto'>
                    <Survey model={survey}/>
                  </div>
            </div>
        </div>
  );
}

export default App;
