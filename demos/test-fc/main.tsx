import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// function App() {
// 	const [num, setNum] = useState(100);
// 	return <div onClickCapture={() => setNum(num + 1)}>{num}</div>;
// }

function App() {
	const [num, setNum] = useState(100);
	const arr =
		num % 2 === 0
			? [<li key="1">1</li>, <li key="2">2</li>, <li key="3">3</li>]
			: [<li key="1">3</li>, <li key="2">2</li>, <li key="1">1</li>];
	return <div onClickCapture={() => setNum(num + 1)}>{arr}</div>;
}

function Child() {
	return <span>koko</span>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
