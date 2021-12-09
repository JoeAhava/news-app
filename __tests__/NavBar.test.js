/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import NavBar from "../components/NabBar";

describe("Navigation Bar", () => {
	it("Should have a nav element", async () => {
		render(<NavBar />);
		const nav = screen.getByRole("navigation");
		expect(nav).toBeInTheDocument();
	});

	it("Should have a options in nav", async () => {
		render(<NavBar />);
		const ul = screen.getByRole("list");
		expect(ul).toBeInTheDocument();
	});
	it("Should have a items for the list in nav", async () => {
		render(<NavBar />);
		const li = screen.getAllByRole("listitem");
		expect(li.length).toBeGreaterThan(0);
	});
	// it("Should have links for each items in nav", async () => {
	// 	render(<NavBar />);
	// 	const link = screen.getAllByRole("link");
	// 	const li = screen.getAllByRole("listitem");
	// 	expect(link.length).toEqual(li.length);
	// });
});
