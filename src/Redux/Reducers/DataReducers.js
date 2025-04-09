const initialState = {
  ComponentData: {
     show_file_loader:false,
     nvgt_to_site:false
  },
  UserInfo: {
    user: {
      id: "default id",
      name: "defaut name",
      email: "default email"
    },
    services: {
      static_site: []
    },
    other_info: {
      crsrpgif: { // current servicepage information
        id: 1234,
        URL: "https://www.google.com",
        site_name: "site name",
        Date: Date.now()
      }
    },
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state };
    case "HOST_STATIC_SITE":
      return { ...state };
    case "GET_SITES_LIST":
      state.UserInfo.services.static_site = action.payload.URL;
      return state;
    case "SET_CRSRPGIF":
      return state;
    case "DELETE_SITE":
      return state;
    case "SETUP_FOLDER":
      return state;
    case "SHOW_LOADER":
      state.ComponentData.show_file_loader=action.payload;
      return {...state};
    case "NVGT_TO_SITE":
      state.ComponentData.nvgt_to_site=action.payload;
      return {...state}; 
    default:
      return state;
  }
};

export default dataReducer;