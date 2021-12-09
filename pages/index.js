import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NabBar";
export default function Home() {
	return (
		<div>
			<Head>
				<title>News-Room</title>
				<meta
					name="description"
					content="A news room website with top healines and up to date information"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<NavBar />
				<Image src={"/vercel.svg"} layout="fill" />
			</header>
		</div>
	);
}
