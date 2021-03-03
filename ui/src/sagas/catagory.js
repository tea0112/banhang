import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { SET_CATAGORIES } from '../constants/ActionTypes';

const getCatagories = async () => {
  const catagories = await axios
    .get('/api/v1/danhmuc')
    .then((response) => response.data);
  return catagories;
};

function* setCatagories() {
  const catagories = yield call(getCatagories);
  yield put({ type: SET_CATAGORIES, payload: catagories });
}

export default function* watchCatagoryAsync() {
  yield takeEvery('SET_CATAGORIES_ASYNC', setCatagories);
}
