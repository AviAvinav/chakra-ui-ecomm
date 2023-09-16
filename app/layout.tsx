import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Cprovider } from "@/app/cprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ecomm",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Cprovider>{children}</Cprovider>
			</body>
		</html>
	);
}
