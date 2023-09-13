import { configureStore } from '@reduxjs/toolkit'
import NewCartSlice from './NewCartSlice'

const newStore = configureStore({
    reducer : {
        myCart : NewCartSlice 
    }
})

export default newStore