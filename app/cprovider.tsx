"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraBaseProvider } from "@chakra-ui/react";

export function Cprovider({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<ChakraBaseProvider>{children}</ChakraBaseProvider>
		</CacheProvider>
	);
}
