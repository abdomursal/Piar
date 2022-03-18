import { createSlice } from "@reduxjs/toolkit";



export type ModalEntitiesProps={
  isOpen: boolean;
  modalType:string;
  activeSection:string;
  data:object|{}
}

export const initialState: ModalEntitiesProps = {
  isOpen:false,
  modalType:'',
  activeSection:'',
  data:{},

};

export const modalSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToModal: (state , action) => {
      return { ...state, data:action.payload.items, isOpen:!state.isOpen, modalType:action.payload.type, activeSection:action.payload.activeSection };
    },
    closeModal:(state)=>{
      return{...state, isOpen:false, modalType:'', activeSection:'', data:{}}
    },
  },
});

export const { addToModal , closeModal} = modalSlice.actions;

export default modalSlice.reducer;
