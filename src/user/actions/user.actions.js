import { userConstants } from '../../rootindex/constants';
import { userService } from '../../rootindex/services';
import { alertActions } from '../../rootindex/actions';
import { history } from '../../_helpers';
import { alertConstants } from '../../common/constants/alert.constants';

export const userActions = {
    login,
    logout,
    register,
    getMMMFData,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/'+alertConstants.homePage);
                    //window.location.href=window.location.href;
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getMMMFData() {
    return dispatch => {
        dispatch(request());

        userService.getMMMFData()
            .then(               
                mmmfdata => dispatch(success(mmmfdata)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETMMF_REQUEST } }
    function success(mmmfdata) { return { type: userConstants.GETMMF_SUCCESS, mmmfdata } }
    function failure(error) { return { type: userConstants.GETMMF_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}