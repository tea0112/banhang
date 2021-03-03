import { all } from 'redux-saga/effects';
import watchUserAsync from './user';
import watchCatagoryAsync from './catagory';

export default function* rootSaga() {
  yield all([watchUserAsync(), watchCatagoryAsync()]);
}
