import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

export default function Home() {
  return (
	<>
		<Head>
			<title>Home | Ig.news</title>
		</Head>

		<main className={styles.contentContainer}>
			<section className={styles.hero}>
				<span>👏 Olá, seja bem vindo!</span>
				<h1>Noticias sobre o mundo <span>React</span>.</h1>
				<p>
					Tenha acesso a todas as publicações <br />
					<span>por apenas $9,90 por mês.</span>
				</p>
				<SubscribeButton />
			</section>

			<img src="/images/avatar.svg" alt="Girl coding" />
		</main>
	</>
  )
}
