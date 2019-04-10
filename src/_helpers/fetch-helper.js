import { authHeader } from  './auth-header';
import { alertConstants } from '../common/constants/alert.constants';
import axios from 'axios';
import FormData from 'form-data';
export const fetchHelper = {
		httpGet,
		httpPost,
		httpFormPost,
		httpPut,
		httpDelete,
		logout,
		login
};

function httpGet(url,extraHeaders=null) {
	  const requestOptions = {
	        method: 'GET',
	        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' },
	    };
	    return fetch(url,requestOptions).then(handleResponse);
}

function httpPost(url,jsonBody,extraHeaders=null) {
	   const requestOptions = {
	        method: 'POST',
	        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' },
	        body: JSON.stringify(jsonBody)
	    };
	   return fetch(url,requestOptions).then(handleResponse);
}

function httpFormPost(url,jsonBody) {
	return axios({
		method: 'post',
		url:url,
		data: jsonBody,
		config: { headers: {'Content-Type': 'multipart/form-data' }}
		}).then(handleFormResponse);
}

function handleFormResponse(response) {

		return response.data;
}


function httpPut(url,jsonBody,extraHeaders=null) {
	   const requestOptions = {
	        method: 'PUT',
	        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' },
	        body: JSON.stringify(jsonBody)
		};


	  return fetch(url,requestOptions).then(handleResponse);
}

function httpDelete(url,extraHeaders=null) {

	    const requestOptions = {
		        method: 'DELETE',
		        headers: { ...authHeader(),...extraHeaders,'Content-Type': 'application/json' }
		};
	    return fetch(url,requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              window.location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });

}



// function login(username,password) {
//  	var loginDetails = new FormData();
// 	loginDetails.append("loginName",username)
// 	loginDetails.append("noOneKnows",password)
// 	return   [{"id":"","label":"","name":"","value":"","flag":"success","image":"","parentImage":"","toppanelImage":"","token":"41118622","href":"","onclick":"","checked":"","fieldValue":"","localeLang":"en_US","onChangeFlag":"","subListName":"","paginationFlag":"true","loginId":"41118622","companyId":"67199300","action":"","link":"","type":""}]

// }

function login(username,password) {
	var loginDetails = new FormData();
   loginDetails.append("loginName",username)
   loginDetails.append("noOneKnows",password)
   return console.log("loginnn-==>",fetchHelper.httpFormPost(alertConstants.URL+'/reactjs/reactJSUtil.jsp?actionFlag=VALIDATE_LOGIN',
   loginDetails).then(user => {
		   // login successful if there's a jwt token in the response

	//		 window.location.reload(); // refresh the top panel to get logged user links

		   if (user[0].token) {
			   // store user details and jwt token in local storage to keep user logged in between page refreshes
		   localStorage.setItem('loginName', JSON.stringify(username));
		   localStorage.setItem('user', JSON.stringify(user));
		   localStorage.setItem('userLocaleTxt', user[0].localeLang);
			  //console.log("target fetchhelper... userLocaleTxt::",JSON.parse(localStorage.getItem('userLocaleTxt')));
		   }

			return user;
	   }));
}

function logout() {
	// remove user from local storage to log user out
    localStorage.removeItem('user');
	localStorage.removeItem('clientFirm');
	localStorage.setItem('navlinkFlag',"false");
 }

