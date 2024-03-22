import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { searchCommunity } from "@/api";
import { debounce } from "lodash";

const Search = ({
	onChange,
}: {
	onChange: (results: any, isSearching: boolean) => void;
}) => {
	const [search, setSearch] = useState("");

	const debouncedSearch = debounce((searchValue: string) => {
		searchCommunity(searchValue).then((res) => {
			onChange(res, true);
		});
	}, 500); // Adjust the debounce delay as per your requirement

	useEffect(() => {
		if (!search.trim()) {
			onChange([], false);
			return;
		}
		debouncedSearch(search);
	}, [search]);

	return (
		<Input
			value={search}
			label="Search"
			radius="lg"
			classNames={{
				label: "text-black/50 dark:text-white/90",
				input: [
					"bg-transparent",
					"text-black/90 dark:text-white/90",
					"placeholder:text-default-700/50 dark:placeholder:text-white/60",
				],
				innerWrapper: "bg-transparent",
				inputWrapper: [
					"shadow-md",
					"bg-default-200/50",
					"dark:bg-default/60",
					"backdrop-blur-xl",
					"backdrop-saturate-200",
					"hover:bg-default-200/70",
					"dark:hover:bg-default/70",
					"group-data-[focused=true]:bg-default-200/50",
					"dark:group-data-[focused=true]:bg-default/60",
					"!cursor-text",
				],
				base: "p-2 border-b-[1px]",
			}}
			placeholder="Type to search..."
			startContent={
				<FiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
			}
			onChange={(e) => setSearch(e.target.value)}
		/>
	);
};

export default Search;
