import Image from '../assets/img/building.jpg'
import Image1 from '../assets/img/building1.jpg'
import Image2 from '../assets/img/building2.jpg'
import Image3 from '../assets/img/building3.jpg'
import Image4 from '../assets/img/building4.jpg'
import Image5 from '../assets/img/building5.jpg'
import Image6 from '../assets/img/building6.jpg'

import { configureStore, createSlice } from '@reduxjs/toolkit'

const propertyList = [
    {
        "location": "Festac",
        "town": "Ikeja",
        "image": Image,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Wempco",
        "town": "Ikeja",
        "image": Image2,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Akninkunmi",
        "town": "Yaba",
        "image": Image3,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Tejuosho",
        "town": "Surulere",
        "image": Image1,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Pamilerin",
        "town": "Ketu",
        "image": Image6,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Fortune's estate",
        "town": "Lekki",
        "image": Image4,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Ikeja",
        "town": "Ikeja",
        "image": Image,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. "    `,
    },
    {
        "location": "Ikeja",
        "town": "Badagry",
        "image": Image5,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "image": Image2,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "image": Image4,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "image": Image3,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023. `,
    },
    {
        "location": "Ikeja",
        "town": "Ifako",
        "image": Image2,
        bathroom: 3,
        rooms: 4,
        landSize: "620m2 land area",
        garage: 3,
        description: `
                   Designed by AO Architecture and built by the developers company J & S Build - The two incredibly reputable companies behind the project. This will give you confidence in the finished product and the realistic time frames provided with construction set to begin Q4 2022 and for completion which is the end of Q2 2023.`,
    }
]

const property = {};


const propertySlice = createSlice({
    name: 'Property',
    initialState: { list: propertyList, property: property },
    reducers: {
        check: (state, actions) => {
            state.property = actions.payload
            console.log(actions.payload)
        },
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
    }
})


const store = configureStore({ reducer: { property: propertySlice.reducer } });



export const propActions = propertySlice.actions;

export default store;
