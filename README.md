# create react-redux store

### -1 Declairing Store
```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        
        }
})

export default store
```
### -2 Declairing Slices and Reducers

```javascript 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData:null
}

const authSlice = createSlice({
    name:'slice-name',
    initialState,
    reducers:{
        login: (state, action) =>{
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state) =>{
            state.status = false;
            state.userData = null;
        }

    }    
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer
```
### -3 wrapping App with react-redux Provider

```javascript
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)

```