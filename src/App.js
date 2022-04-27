import './App.css';
import React from 'react';
import $ from 'jquery'; 
import "survey-core/modern.min.css";
import { Model,StylesManager} from "survey-core";
import { Survey } from "survey-react-ui";
import Bus from '../src/assets/Bus.png'


StylesManager.applyTheme("modern");

const surveyJson = {
    "showProgressBar": "top",
    "pages": [
      {
        
          "name": "page1",
          "title": "Parent Information",
          "elements": [
                {
                  "type": "panel",
                  "name": "first_page_container_panel",
                  "elements": [
                      {
                          "type": "text",
                          "name": "ParentFirstName",
                          "title": "First Name:",
                          "hideNumber": true,
                          "inputType": "text"
                      },
                      {
                        "type": "text",
                        "name": "ParentLastName",
                        "title": "Last Name:",
                        "hideNumber": true,
                        "inputType": "text"
                    }, 
                    {
                      "type": "radiogroup",
                      "hideNumber": true,
                      "name": "Parent_Gender",
                      "title": "Sex",
                      "choices": [
                          {
                              "value": "Male",
                              "text": "Male"
                          }, {
                              "value": "Female",
                              "text": "Female"
                          }, 
                      ],
                      "colCount": 3
                  },
                  {
                       "type": "text",
                        "name": "PhoneNo",
                         "hideNumber": true,
                          "title": "Phone No",
                            "inputType":"tel",
                   }, {
                         "type": "text",
                         "name": "Email",
                          "hideNumber": true,
                           "title": "Email",
                           "validators": [
                            {
                             "type": "email"
                            }
                           ]
                   },
                   {
                     "type": "text",
                      "hideNumber": true,
                       "name": "Address",
                      "title": "Address",
                                
                  }
  
                  ],
                  "startWithNewLine": false
              }
          ],
          "navigationTitle": "Parent Information",
      }, 
      
// ********************************************************** 
      
      {
          "name": "page2",
          "title": "Children Information",
          "elements": [
            {
              "type": "text",
              "name": "Child-1_FullName",
              "title": "Full Name:",
              "hideNumber": true,
              //"isRequired": true,
              "inputType": "text"
            },
            {
              "type": "text",
              "name": "School_of_Child_1",
              "title": "School:",
              "hideNumber": true,
             // "isRequired": true,
              "inputType": "text"
            },  
            {
              "type": "text",
              "name": "Class_of_Child_1",
              "title": "Class :",
              //"isRequired": true,
              "hideNumber": true,
              "inputType": "text"
            }, 
      

    {
        "type": "boolean",
        "name": "Do they have more children ?",
        "title": "Do you have any more children ?",
        "hideNumber": true,
        //"isRequired": true,
        "labelTrue": "Yes",
        "labelFalse": "No"
    }, 
              
              
              
              {
                  "type": "panel",
                  "name": "children_information",
                  "elements": [
                    {
                      "type": "text",
                      "name": "Child-2_FullName",
                      "title": "First Name:",
                      //"isRequired": true,
                      "hideNumber": true,
                      "inputType": "text"
                    },
                    {
                      "type": "text",
                      "name": "School_of_Child_2",
                      "title": "School:",
                      "hideNumber": true,
                      // "isRequired": true,
                      "inputType": "text"
                    }, 
                    {
                      "type": "text",
                      "name": "Class_of_Child_2",
                      "title": "Class :",
                      // "isRequired": true,
                      "hideNumber": true,
                      "inputType": "text"
                    },],


                  "visible": false,
                  "visibleIf": "{Do they have more children ?} = true",
                  "title": "Children No.2",
                  "showNumber": true,
                  "showQuestionNumbers": "off"
              }, 
          ],
          "navigationTitle": "Children",
      },
      
      

      {
          "name": "page3",
          "title": "Questions",
          "elements": [
              {
                  "type": "panel",
                  "name": "Questionaire",
                  
                  "elements": [
                      {
                          "type": "panel",
                          "name": "Question_1",
                          "elements": [
                              {
                                  "type": "checkbox",
                                  "name": "Question_1",
                                  "title": "What colour would be appropriate for the Vehicle ?",
                                  "startWithNewLine": false,
                                  "choices": [
                                      {
                                          "value": "Red",
                                          "text": "Red",
                                          "enableIf": "{Question_1} <> ['Red']"
                                      }, {
                                          "value": "Blue",
                                          "text": "Blue",
                                          "enableIf": "{Question_1} <> ['Blue']"
                                      },{
                                        "value": "Green",
                                        "text": "Green",
                                        "enableIf": "{Question_1} <> ['Green']"
                                    },
                                    {
                                      "value": "Yellow",
                                      "text": "Yellow",
                                      "enableIf": "{Question_1} <> ['Yellow']"
                                  },
                                  ],
                                  "colCount": 4
                              }, {
                                  "type": "radiogroup",
                                  "name": "Question_2",
                                  "title": "Would you like the vehicle of transport to be a Bus or Car ?",
                                  "titleLocation": "default",
                                  "choices": [
                                      {
                                          "value": "Bus",
                                          "text": "Bus"
                                      }, {
                                          "value": "Car",
                                          "text": "Car"
                                      }, 
                                  ],
                                  "colCount": 3
                              }
                          ],
                          
                      }, {
                          "type": "radiogroup",
                          "name": "Question_3",
                          "title": "Do you want a real time location of the vehicle transporting your child ?",
                          "titleLocation": "default",
                          "choices": [
                              {
                                  "value": "Yes",
                                  "text": "Yes"
                              }, {
                                  "value": "No",
                                  "text": "No"
                              }, {
                                  "value": "Maybe",
                                  "text": "Maybe"
                              }
                          ],
                          "colCount": 3
                      }, {
                          "type": "radiogroup",
                          "name": "Question_4",
                          "title": "Would you agree if we implemented Pickup points based on your location ?",
                          "description":"(By Pickup points we mean the location where you can drop off your child to be picked up from)",
                          "titleLocation": "default",
                          "choices": [
                              {
                                  "value": "Yes",
                                  "text": "Yes"
                              }, {
                                  "value": "No",
                                  "text": "No"
                              }, {
                                  "value": "Maybe",
                                  "text": "Maybe"
                              }
                          ],
                          "colCount": 3
                      }, {
                          "type": "radiogroup",
                          "name": "Question_5",
                          "title": "Would you like a Teacher to be present in the bus ?",
                          "titleLocation": "default",
                          "choices": [
                              {
                                  "value": "Yes",
                                  "text": "Yes"
                              }, {
                                  "value": "No",
                                  "text": "No"
                              }, {
                                  "value": "Maybe",
                                  "text": "Maybe"
                              }
                          ],
                          "colCount": 3
                      }, {
                          "type": "radiogroup",
                          "name": "Question_6",
                          "title": "Do you want to schedule the bus according to your specified time ?",
                          "titleLocation": "default",
                          "choices": [
                              {
                                  "value": "Yes",
                                  "text": "Yes"
                              }, {
                                  "value": "No",
                                  "text": "No"
                              }, {
                                  "value": "Maybe",
                                  "text": "Maybe"
                              }
                          ],
                          "colCount": 3
                      }, {
                          "type": "radiogroup",
                          "name": "Question_7",
                          "title": "Do you want to verify drivers before hand along with the school authority ?",
                          "titleLocation": "default",
                          "choices": [
                              {
                                  "value": "Yes",
                                  "text": "Yes"
                              }, {
                                  "value": "No",
                                  "text": "No"
                              }, {
                                  "value": "Maybe",
                                  "text": "Maybe"
                              }
                          ],
                          "colCount": 3
                      }, {
                          "type": "radiogroup",
                          "name": "Question_8",
                          "title": "Do you want the driver to be recruited by the school ?",
                          "titleLocation": "default",
                          "choices": [
                              {
                                  "value": "Yes",
                                  "text": "Yes"
                              }, {
                                  "value": "No",
                                  "text": "No"
                              }, {
                                  "value": "Maybe",
                                  "text": "Maybe"
                              }
                          ],
                          "colCount": 3
                      }, {
                          "type": "radiogroup",
                          "name": "Question_9",
                          "title": "Currently, we are working with one school, However, Would you be willing to use our system, if we integrated it with other schools ?",
                          "titleLocation": "default",
                          "choices": [
                              {
                                  "value": "Yes",
                                  "text": "Yes"
                              }, {
                                  "value": "No",
                                  "text": "No"
                              }, {
                                  "value": "Maybe",
                                  "text": "Maybe"
                              }
                          ],
                          "colCount": 3
                      }
                  ],
                  
                  "startWithNewLine": true,
                  "showNumber": false,
                  "showQuestionNumbers": "off"
              }
          ],
          "navigationTitle": "Questions",
      }, {
          
          "navigationTitle": "Completion",
          "navigationDescription": "Status of form"
      }
      
  ],
  
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
  survey.focusFirstQuestionAutomatic = true;
  survey.onComplete.add(sendDataToServer);
  

  return (
        <div className='container'>
            <div className='img-container'>
               <img src={Bus} alt="logo-bus" className='img'/>
            </div> 
            
            <div className='survey-box'>  
                 <Survey model={survey}/>  
            </div>

            </div>
            
      
  );
}

export default App;
