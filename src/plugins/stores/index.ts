import { createStore } from 'vuex'

import Users from './modules/users'

const stores = createStore({
    modules: {
        user: Users
    }
})

export default stores