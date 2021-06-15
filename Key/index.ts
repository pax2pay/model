import * as isoly from "isoly"
import * as authly from "authly"

export interface Key {
	expires: isoly.DateTime
	token: string
}

type Type = "live" | "test"
const keys: { [system in Type]: string } = {
	live:
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxlFIXIs33fWRQ0QwOGuiQ8XNuL3ADIcS3aVZPLnLhuV73bnMnX52LR3Ob2Angtp0lSZ6b0TiL65pJv1FJ+vB724Wy6IzgG5sIP4IKd/Mm4rugfHnYFPejVMMrTqp9WR22zMerEzdBRVPBNJJs8yASxKy14syvT9AslXYUCkneyATo34s0o53MZQyCfEcyvbet5o7tbQC0PQ2Mh5W9tsi9SOKQiIs3KzPqpUfpcqs8wfCMgkNkrJvCRYh4hVvddQAPpHf17ZbpmVxSGuootV7kJDSgl2+AGI2Z+wpT09x3zA3ohj3qlbi50OUXHEdkAzpTSxaLd+QhIJTlOtGxXmj0QIDAQAB",
	test:
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt5jV2gNDWcao0/5Sc3wMQW2GdxQJuLj3JXDmJK68WVVNHG8hZCsLIk6cp2oXCf2lArM8lcWsb/yB56A5AJW4gaWyzwglGOWzKpS0UXN5YtQ87J8H/VlS2PRE0i789Yu9nLdaF7is6jzSv+lJae/0HNayCqi9mAg167tpPZhBjjEMkb8imZNOoVdgKjPHtB2l93hbH1SDU/qX3d2aPd3EKB7OaMcNCnjXFV7t9AWojhPLyl1elfqfFB6EsqVtwEKvB0/JTj0jgmFwZMVYN1KeC3XQ1BBcjKI8DMe4bpEb+f6bLDlKwvxOomszXiX1LapGEOaiABXsTLs/lgK+ij3ZLwIDAQAB",
}
const transformers: (authly.Property.Transformer | undefined)[] = [
	// new authly.Property.Renamer({ exp: "expires" }),
	// new authly.Property.Converter({
	// 	expires: {
	// 		forward: (value: isoly.DateTime) => Math.floor(isoly.DateTime.parse(value).valueOf() / 1000),
	// 		backward: (value: number) => isoly.DateTime.create(new Date(value * 1000)),
	// 	},
	// }),
]

export namespace Key {
	export type Issuer = authly.Issuer<Key>
	export namespace Issuer {
		export function create(type: Type, privateKey: string): Issuer {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			return authly.Issuer.create<Key>(type, authly.Algorithm.create("RS256", undefined, privateKey))!.add(
				...transformers
			)
		}
	}
	export type Verifier = authly.Verifier<Key>
	export namespace Verifier {
		export function create(type: Type): Verifier {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			return authly.Verifier.create<Key>(authly.Algorithm.create("RS256", keys[type]))!.add(...transformers)
		}
	}
}
