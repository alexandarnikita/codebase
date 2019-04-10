import { authHeader,fetchHelper } from '../../_helpers';
import FromData from 'form-data';
import { alertConstants } from '../../common/constants/alert.constants'; 

export const userService = {
    login,
    logout,
    register,
    getMMMFData,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
	return fetchHelper.login(username, password);
}
function getMMMFData() { 
    var user = JSON.parse(localStorage.getItem('user'));
    var bodyFormData = new FromData();
    let getMMMFData; 
    //  var pathname = window.location.pathname.replace("/","")
     
    if(user[0].token !== undefined){
        bodyFormData.append("token",user[0].token);
        bodyFormData.append("clientFirm",JSON.parse(localStorage.getItem('clientFirm')));
      
        getMMMFData = fetchHelper.httpFormPost(alertConstants.URL+'/FUNDINFO.do',bodyFormData);
        // getMMMFData = [{"id":"0","label":"","name":"Research Money Funds","value":"","flag":"","image":"","parentImage":"","toppanelImage":"","token":"","href":"","onclick":"","checked":"","fieldValue":"","localeLang":"","onChangeFlag":"","subListName":"","paginationFlag":"true","loginId":"","companyId":"","action":"","link":"","type":"Title"},{"id":"1","label":"","name":"data","value":"","flag":"","image":"","parentImage":"","toppanelImage":"","token":"","href":"","onclick":"","checked":"","fieldValue":"","localeLang":"","onChangeFlag":"","subListName":"","paginationFlag":"true","loginId":"","companyId":"","action":"","link":"","type":"data"},{"id":"2","name":"columns","label":"columns","COLUMNS":[{"name":"Fund Name","options":{"filter":false,"sort":true,"display":true,"hyperlink":"true"}},{"name":"Fund Type","options":{"filter":false,"sort":true,"display":true,"hyperlink":"false"}},{"name":"CCY","options":{"filter":true,"sort":true,"display":true,"hyperlink":"false"}},{"name":"Factor","options":{"filter":false,"sort":true,"display":true,"hyperlink":"false"}},{"name":"Daily Yield(%)","options":{"filter":false,"sort":true,"display":true,"hyperlink":"false"}},{"name":"Rating S\u0026P","options":{"filter":true,"sort":true,"display":true,"hyperlink":"false"}},{"name":"Rating Moodys","options":{"filter":true,"sort":true,"display":true,"hyperlink":"false"}},{"name":"Rating Fitch","options":{"filter":true,"sort":true,"display":true,"hyperlink":"false"}},{"name":"Rating NAIC","options":{"filter":true,"sort":true,"display":true,"hyperlink":"false"}},{"name":"EOD Cut-Off Time","options":{"filter":false,"sort":true,"display":true,"hyperlink":"false"}},{"name":"AUM(MM)","options":{"filter":false,"sort":true,"display":true,"hyperlink":"false"}},{"name":"Fund Type Description","options":{"filter":true,"sort":true,"display":false,"hyperlink":"false"}},{"name":"Fund Family","options":{"filter":true,"sort":true,"display":false,"hyperlink":"false"}},{"name":"fundtypeid","options":{"filter":false,"sort":true,"display":"excluded","hyperlink":"false"}},{"name":"Family Id","options":{"filter":false,"sort":true,"display":"excluded","hyperlink":"false"}}]},{"id":"3","name":"DATA","label":"DATA","DATA":[["LDN EUR Liquidity Fund # 9005","FNAV","EUR","0.0001408220","15.23","1234","3456","1234","3466","11:55 PM (GMT+0:0)","2,324","Gov\u0026#39;t","LDN OFFSHORE","101","16364027"],["LDN Global GBP Interest Payout # 9004","FNAV","GBP","0.0001408220","5.21","1231","1244","1234","2355","11:55 PM (GMT+0:0)","5,394","Gov\u0026#39;t","LDN OFFSHORE","101","16364027"],["LDN Global GBP Liquidity Fund # 9003","FNAV","GBP","0.0001408220","5.14","2341","234","123","122","11:55 PM (GMT+0:0)","5,394","Gov\u0026#39;t","LDN OFFSHORE","101","16364027"],["STI USD Global Cash Payout Fund # 9008","FNAV","USD","1.0000000000","1.00","1234","3564","1233","4566","11:55 PM (GMT+0:0)","1","Gov\u0026#39;t","LDN OFFSHORE","101","16364027"],["STI USD Global Recap Fund # 9007","FNAV","USD","0.0001408220","12.13","2433","3455","2344","23455","11:55 PM (GMT+0:0)","1","Gov\u0026#39;t","LDN OFFSHORE","101","16364027"]]}];


    }
    return getMMMFData;
}
 

function getById(id) {
    let _getById = fetchHelper.httpGet('/users/${id}');
    return _getById;
}

function register(user) {
    return fetchHelper.httpPost('/users/register',user);
}

function update(user) {
    return fetchHelper.httpPut('/users/${user.id}',user);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
	return fetchHelper.httpDelete('/users/${id}');
}

function logout() {
	fetchHelper.logout();
}
