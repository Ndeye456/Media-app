const addIMess = [];

 const addIMesse = (state = addIMess, action) => {
      switch (action.type) {
         case "ADDITEM" : return[
             ...state,
             action.payload
         ]

        
          case "DELITEM" :
            return [...state.filter((x)=>{
                return x._id !== action.payload._id
            })]

            //    return state = state.filter((x)=>{
            //       return x.id !== action.payload.id
            //   })

             default: return state;
            
      }
 }
 export default addIMesse;