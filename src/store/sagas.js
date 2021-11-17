import axios from "axios";
import {
  put,
  takeLatest,
  delay,
  all,
  call,
  takeEvery,
} from "redux-saga/effects";
import { BOT, FETCH_URL } from "../const";
import { fetchData } from "./fetch/routines";
import { messageAdd } from "./messages/actions";

function* onMessageAdd(action) {
  const { id, message } = action.payload;

  if (message.user !== BOT.name) {
    yield delay(1500);
    yield put(
      messageAdd(id, {
        id: Date.now(),
        user: BOT.name,
        text: BOT.message,
      })
    );
  }
}

function* onDataFetch() {
  try {
    yield put(fetchData.request());
    const response = yield call(axios.get, FETCH_URL);
    yield put(fetchData.success(response.data));
  } catch (error) {
    yield put(fetchData.failure(error.message));
  } finally {
    yield put(fetchData.fulfill());
  }
}

function* watchAll() {
  yield all([
    takeLatest("MESSAGE_ADD", onMessageAdd),
    takeEvery(fetchData.TRIGGER, onDataFetch),
  ]);
}

export default watchAll;
