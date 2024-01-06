
type navItemsTypes = {
    id : number,
    number : string,
    text : string,
    to:string
}


export const navItems : Array<navItemsTypes> = [
    {
        id : 1,
        number : '00',
        text : 'HOME',
        to : '/'
    },

    {
        id : 2,
        number : '01',
        text : 'DESTINATION',
        to : '/destination'
    },

    {
        id : 3,
        number : '02',
        text : 'CREW',
        to : '/crew'
    },

    {
        id : 4,
        number : '03',
        text : 'TECHNOLOGY',
        to : '/technology'
    },
]

