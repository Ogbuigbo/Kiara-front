import React from "react";

const FacebookSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={42}
		height={43}
		fill="none"
		{...props}
	>
		<circle cx={20.857} cy={21.546} r={20.857} fill="#ECECEC" />
		<g clipPath="url(#a)">
			<path
				fill="#121212"
				d="M21.726 18.938h3.91l-.434 1.739h-3.476v7.82h-1.738v-7.82h-3.476v-1.739h3.476v-1.627c0-1.549.162-2.111.464-2.678a3.159 3.159 0 0 1 1.314-1.314c.567-.302 1.13-.464 2.679-.464.453 0 .851.043 1.192.13v1.608h-1.192c-1.151 0-1.501.068-1.858.26-.265.14-.461.336-.602.6-.191.358-.259.708-.259 1.858v1.627Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M10.429 11.117h20.857v20.857H10.429z" />
			</clipPath>
		</defs>
	</svg>
)
export default FacebookSvg
