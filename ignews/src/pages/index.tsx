import Head from "next/head";
import GlobalStyle from "../styles/global";
import HomePage from "../pages/home/home";

export default function Home() {
  return (
	<>
		<Head>
			<title>Home</title>
		</Head>



		<HomePage />
		<GlobalStyle />
	</>
  )
}
