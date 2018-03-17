import classes from "./app.css";
import { h, render } from 'preact';

render((
	<div id="foo">
		<span class="span">Hello, world!</span>
		<button onClick={ e => alert("hi!") }>Click Me</button>
	</div>
), document.getElementById('container'));

main();
