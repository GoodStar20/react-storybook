import constants form './constants'

const initialState = {
  balance: 0
  }

const bankReducer = (state, action) => {
        console.log(action) // Lets see behind the hood

        switch (action.type) {

