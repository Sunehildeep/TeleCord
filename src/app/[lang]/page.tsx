import React from "react";
import PageTitle from "@/components/PageTitle";
import { getDictionary } from "@/functions/getDictionary";
import MainPage from "@/components/MainPage";

export default async function Home({ params: { lang } }: Home) {
	const dict = await getDictionary(lang);
	return (
		<>
			<PageTitle title="Telecord" />
			<MainPage />
		</>
	);
}