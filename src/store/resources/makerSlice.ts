// makerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RecordData {
  apbItemSeqNo: string;
  accountNo: string;
  beneficiaryName: string;
  accountHolderName: string;
  amount: string;
  txnStatus: string;
  exceptionReason: string;
  userName: string;
  productType: string
}

interface ApbsState {
  apbsData: RecordData | null;
  // test:string | undefined;
  inwarddate:string | undefined;
  // inwardDate: string | undefined;
  selectedFileName: string;
}

const initialState: ApbsState = {
  apbsData: null,
  // test:"",
  inwarddate:"",
  // inwardDate: "",
  selectedFileName: '',
};

const makerModifySlice = createSlice({
  name: 'makerModify',
  initialState,
  reducers: {
    setApbsData: (state, action: PayloadAction<RecordData>) => {
      state.apbsData = action.payload;
    },
    // setTestdata:(state,action:PayloadAction<string>)=>{
    //   state.test= action.payload
    // },
    setInwarDateData:(state,action:PayloadAction<string>)=>{
      state.inwarddate = action.payload
    },
    // setInwardDate: (state, action: PayloadAction<string>) => {
    //   console.log("asdfgh")
    //   state.inwardDate = action.payload;
    // },
    setSelectedFileName: (state, action: PayloadAction<string>) => {
      state.selectedFileName = action.payload;
    },
  },
});

export const { setApbsData, setInwarDateData, setSelectedFileName } = makerModifySlice.actions;
export default makerModifySlice.reducer;