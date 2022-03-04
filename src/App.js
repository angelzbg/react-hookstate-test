import { useState } from '@hookstate/core';
import { useSecondStore } from './store/secondStore';
import { useFirstStore } from './store/firstStore';
import ReactJson from 'react-json-view';
import { getFirstState } from './utils/utils';

const App = () => {
  const firstStore = useFirstStore(); // global state mutated by the component + input change
  const secondStore = useSecondStore(); // global state mutated with api call independantly
  const localState = useState({ simpleCounter: 0 }); // a local state mutated by the component

  const addCounter = () => localState.simpleCounter.set((count) => count + 1);

  const submitMessage = () => {
    firstStore.batch((s) => {
      s.messages.merge([{ msg: firstStore.messageValue.value, author: 'me', time: new Date().getTime() }]);
      s.messageValue.set('');
    });
  };

  return (
    <div>
      <ReactJson collapsed={3} src={getFirstState(firstStore)} />
      <br />
      <div>
        <input
          type="text"
          value={firstStore.messageValue.value}
          onChange={({ target: { value } }) => firstStore.messageValue.set(value)}
        />
        <button onClick={submitMessage}>Add Message</button>
      </div>
      <br />
      <div>
        {secondStore.loadingData.value
          ? 'Loading...'
          : `Correct answer obtained (api call): ${secondStore.someData.value.results[0].correct_answer}`}
      </div>
      <br />
      <div>
        Counter: {localState.simpleCounter.value} | <button onClick={addCounter}>Increment</button>
      </div>
    </div>
  );
};

export default App;
