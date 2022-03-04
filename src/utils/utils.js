export const getFirstState = (state) => {
  const obj = {};
  obj.messages = state.messages.map((obj) => ({ author: obj.author.value, msg: obj.msg.value, time: obj.time.value }));
  obj.messageValue = state.messageValue.value;
  return obj;
};
