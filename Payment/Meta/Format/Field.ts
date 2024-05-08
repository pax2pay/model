export interface Field {
	name: string // allow nesting with . ex: passenger.age
	title: string
	description: string
	type: "string" | "date" | "date-time" | "number" | "file"
	optional?: boolean
	category?:
		| "person" /* lead passenger, primary guest */
		| "start" /* departure date, checkin */
		| "supplier" /* supplier reference */
		| "reference" /* agent booking reference | customer reference */
}
