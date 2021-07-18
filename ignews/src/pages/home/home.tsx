import Head from "next/head";
import GlobalStyle from "../../styles/global";

import { Container, ContainerLeftBar } from "./styles";

import Button from "../../components/Button";
import LeftBar from "../../components/Sidebar/sidebar";
import { SignInButton } from "../../components/SignInButton";

export default function Home() {
  return (
	<>
		<Head>
			<title>Ig news</title>
		</Head>
		<ContainerLeftBar>
			<LeftBar />
		</ContainerLeftBar>
		<h1>Home</h1>
		<Button>Teste</Button>
		<SignInButton />
	</>
  )
}
