import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useTheme } from "nextra-theme-docs";

function useHead() {
	const { asPath } = useRouter();
	const { frontMatter, title } = useConfig();
	const url = `https://localhost:3000${asPath}`;
	const description =
		frontMatter.description || "Three Amigos Modding Documentation.";

	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/x-icon" href="/static/icon.ico" />
			<meta httpEquiv="Content-Language" content="en" />
			<meta name="description" content={description} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:url" content={url} />
		</>
	);
}

function useNextSeoProps() {
	const { asPath } = useRouter();
	const arr = asPath.replace(/[-_]/g, " ").split("/");
	const category = (arr[1][0] !== "#" && arr[1]) || "Three Amigos Modding";
	const rawTitle = arr[arr.length - 1];
	const title =
		/[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

	return {
		titleTemplate: `${title} - ${
			rawTitle === category
				? "Documentation"
				: category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
		}`,
	};
}

const config: DocsThemeConfig = {
	logo: (
		<>
			<div
				style={{
					lineHeight: "38px",
					fontWeight: 550,
					display: "flex",
				}}
			>
				<img
					src="../static/logo.png"
					style={{
						width: "38px",
						height: "38px",
						marginRight: "25px",
						borderRadius: "calc(infinity * 1px)",
					}}
				/>
				Three Amigos Modding
			</div>
		</>
	),
	project: {
		link: "https://github.com/ThreeAmigosModding",
	},
	chat: {
		link: "https://threeamigos.shop/discord",
	},
	docsRepositoryBase: "https://github.com/ThreeAmigosModding/documentation",
	footer: {
		text: "Copyright © 2026 Three Amigos Modding",
	},
	head: useHead,
	useNextSeoProps: useNextSeoProps,
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	primaryHue: { dark: 0, light: 0 },
};

export default config;
