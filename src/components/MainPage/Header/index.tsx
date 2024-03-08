"use client";
import { useEffect, useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from "@nextui-org/react";
import { getDictionary } from "@/functions/getDictionary";
import { usePathname } from "next/navigation";

const Header = () => {
	const lang = "en";
	const pathname = usePathname();
	const [dict, setDict] = useState<any>({});
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getDictionary(lang).then((dictionary) => {
			setDict(dictionary);
			setLoading(false);
		});
	}, [lang]);

	return loading ? (
		<></>
	) : (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-700 shadow-md">
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden text-white"
				/>
				<NavbarBrand>
					<p className="font-bold text-white">{dict.home.title}</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{dict.home.menu.map((item: any, index: number) => (
					<NavbarItem key={index} isActive={pathname === `${item.link}`}>
						<Link href={`${item.link}`} className="text-white">
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Button>
						<Link href="/auth" className="text-black">
							{dict.home.login_Signup}
						</Link>
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button>{dict.lang}</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{dict.home.menu.map((item: any, index: number) => (
					<NavbarMenuItem key={`${item.name}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === dict.home.menu.length - 1
									? "danger"
									: "foreground"
							}
							className="w-full"
							href={`${item.link}`}
							size="lg"
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default Header;
