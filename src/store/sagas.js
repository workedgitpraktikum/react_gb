import { put, takeLatest, delay } from "redux-saga/effects";
import { BOT } from "../const";
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

function* saga() {
  yield takeLatest("MESSAGE_ADD", onMessageAdd);
}

export default saga;
