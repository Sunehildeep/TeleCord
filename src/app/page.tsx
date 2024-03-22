import React from "react";
import MainPage from "@/components/MainPage";

export default async function Home({ params: { lang } }: Home) {
	return (
		<>
			<MainPage />
		</>
	);
}
