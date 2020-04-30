import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  loadHomeFailure,
  loadHomePageEditorialSuccess,
  saveNewProjectDetailsSuccess,
} from './HomePage.actions';
import { LOAD_HOME_EDITORIAL_DATA } from './HomePage.constants';
import API_URLS from '../../../constants/api/services';
import API from '../../../utils/fetch';

export function* loadHomeEditorialDataSaga(action) {
  try {
    const data = yield call(API.fetch, API_URLS.homePage, action);
    yield put(loadHomePageEditorialSuccess(data));
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}

export default function* homeLayoutSaga() {
  yield all([takeEvery(LOAD_HOME_EDITORIAL_DATA, loadHomeEditorialDataSaga)]);
}

export function* saveNewProjectDetails(action) {
  try {
    const data = yield call(API.fetch, API_URLS.projectCreate, action, { method: 'POST' });
    yield put(saveNewProjectDetailsSuccess(data));
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}
