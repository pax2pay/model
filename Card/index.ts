

export interface Card extends CardCreatable {
	id: string
	
	
	}

export namespace Card {
	export function is(value: Card | any): value is Card {
		//TODO
	}
}
