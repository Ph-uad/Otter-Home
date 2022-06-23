import Image from '../Assets/img/building.jpg'
import Image1 from '../Assets/img/building1.jpg'
import Image2 from '../Assets/img/building2.jpg'
import Image3 from '../Assets/img/building3.jpg'
import Image4 from '../Assets/img/building4.jpg'
import Image5 from '../Assets/img/building5.jpg'
import Image6 from '../Assets/img/building6.jpg'

import {configureStore, createSlice } from '@reduxjs/toolkit'

const propertyList = [
    {
        "location": "Omole",
        "town": "Ikeja",
        "price": "₦20000",
        "image": Image5,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Wempco",
        "town": "Ikeja",
        "price": "₦19,000",
        "image": Image2,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Akninkunmi",
        "town": "Yaba",
        "price": "₦12,000",
        "image": Image3,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Tejuosho",
        "town": "Surulere",
        "price": "₦20,000",
        "image": Image1,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Pamilerin",
        "town": "Ketu",
        "price": "₦20,000",
        "image": Image6,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Fortune's estate",
        "town": "Lekki",
        "price": "₦20,000",
        "image": Image4,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Ikeja",
        "town": "Ikeja",
        "price": "₦20,000",
        "image": Image,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. "    `,
    },
    {
        "location": "Ikeja",
        "town": "Badagry",
        "price": "₦20,000",
        "image": Image5,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "price": "₦20,000",
        "image": Image2,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "price": "₦20,000",
        "image": Image4,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "price": "₦20,000",
        "image": Image3,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "price": "₦20,000",
        "image": Image2,
        description: `
                   this is supposed to be a description to this building. I won't write unique fictional adjectives. I am not J.K Rowling. I'm just rowling. Sounds like a bot joke. but. This is enough.`, 
    }
]

const propertySlice = createSlice({
    name : 'properties',
    initialState : propertyList,
    reducers: { }
})

const store  = configureStore({reducer : {property: propertySlice.reducer}});



export const propertyActions = propertySlice.actions;
export default store;
