import { createGlobalStyle } from "styled-components";
import pointer from "../assets/pointer.svg";
import { white } from "../styles/variables";

export default createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: 0;
}

body {
	background: ${white};
	-webkit-font-smoothing: antialiased;
}

body, input, button {
	font: "Roboto", serif;
	font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
	font-weight: 500;
}

button {
	cursor: url("data:image/svg+xml,%3csvg xmlns=${pointer} width='32' height='32' viewBox='0 0 512 512'%3e%3cg transform='rotate(45 256 256)'%3e%3crect id='r' x='16' y='216' width='480' height='80' rx='14'/%3e%3cuse href='%23r' transform='rotate(90 256 256)'/%3e%3c/g%3e%3c/svg%3e") 16 16, pointer;
}
`
