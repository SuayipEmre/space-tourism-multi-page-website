


export type crewType = {
    id: number,
    bio : string
    role : string
} & sameTypes

export type destinationTypes = {
    description : string
    distance : string
    travel : string
} & sameTypes

export type technologyType = {
    description : string
    name : string
    images : {
        landscape : string
        portrait : string
    }
}

export type  sameTypes = {
    name : string
    images : {
        png : string
        webp ?: string
    }
}
