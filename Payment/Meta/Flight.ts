import { isoly } from "isoly"
import { Format } from "./Format"

export interface Flight {
	format: "flight"
	passenger: string
	reference: string
	supplierReference: string
	departure: isoly.Date
}

export namespace Flight {
	export const format: Format = {
		name: "flight",
		title: "Flight Passenger Information",
		fields: [
			{
				name: "passenger",
				title: "Passenger",
				description: "Name of lead passenger.",
				category: "person",
				type: "string",
			},
			{
				name: "reference",
				title: "Our Reference",
				description: "Our customer reference.",
				category: "reference",
				type: "string",
			},
			{
				name: "supplierReference",
				title: "Supplier Reference",
				description: "Suppliers reference.",
				category: "supplier",
				type: "string",
			},
			{
				name: "departure",
				title: "Departure Date",
				description: "Date of departure.",
				category: "start",
				type: "date",
			},
		],
		top2: ["passenger", "reference"],
		top5: ["passenger", "reference", "supplierReference"],
	}
}
