import { createStore } from 'vuex'

import Users from './modules/users'
import Theme from './modules/theme'

const stores = createStore({
    modules: {
        user: Users,
        theme: Theme,
    }
})

export default stores