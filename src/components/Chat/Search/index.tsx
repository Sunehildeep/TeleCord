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
				label: ["!text-gray-300"],
				input: [
					"bg-transparent",
					"!text-gray-300",
					"placeholder:text-gray-300",
				],
				innerWrapper: ["bg-transparent"],
				inputWrapper: [
					"bg-accent",
					"group-data-[focus]:bg-accent/80",
					"group-data-[hover]:bg-accent/80",
					"!cursor-text",
				],
				base: ["bg-transparent", "text-gray-300", "p-2"],
			}}
			placeholder="Type to search..."
			startContent={
				<FiSearch className="text-gray-300 mb-0.5 text-slate-400 pointer-events-none flex-shrink-0" />
			}
			onChange={(e) => setSearch(e.target.value)}
		/>
	);
};

export default Search;
