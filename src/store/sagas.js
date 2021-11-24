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
import { messagesRef } from "../services/firebase";
import { fetchData } from "./fetch/routines";
import { /* changeMessages,  */ messageAdd } from "./messages/actions";

function* onMessageAdd(action) {
  const { chatID, message } = action.payload;
  messagesRef.child(chatID).child(message.id).set(message);
  if (message.user !== BOT.name) {
    yield delay(1500);
    const botMesageID = Date.now();
    yield put(
      messageAdd(chatID, {
        id: botMesageID,
        user: BOT.name,
        text: BOT.message,
      })
    );
  }
}

function* onChatDelete(action) {
  const { chatID } = action.payload;
  yield messagesRef.child(chatID).remove();
}
//не работает
/* function* initMessageTracking() {
  yield messagesRef.on("value", (snapshot) => {
    const messages = [];
    snapshot.forEach((snap) => {
      messages.push(snap.val());
    });
    put(changeMessages(snapshot.key, messages));
  });
} */

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
    takeEvery("DELETE_CHAT_MESSAGES", onChatDelete),
    /* takeEvery("TRACK_MESSAGES", initMessageTracking) */
  ]);
}

export default watchAll;
