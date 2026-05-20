import { getDatabase, ref, remove } from "firebase/database";

function clearLiveStreamViewers() {
  const database = getDatabase();
  remove(ref(database, 'livestream_viewers/'));
}

function clearLiveStreamChatMessages() {
  const database = getDatabase();
  remove(ref(database, 'livestream_chat_messages/'));
}

function clearLiveStreamVideoId() {
  const database = getDatabase();
  remove(ref(database, 'livestream_url/'));
}

export {
  clearLiveStreamViewers,
  clearLiveStreamChatMessages,
  clearLiveStreamVideoId,
}
