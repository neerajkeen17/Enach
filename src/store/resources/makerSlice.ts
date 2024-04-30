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
  inwardDate: string;
  selectedFileName: string;
}

const initialState: ApbsState = {
  apbsData: null,
  inwardDate: '',
  selectedFileName: '',
};

const makerModifySlice = createSlice({
  name: 'makerModify',
  initialState,
  reducers: {
    setApbsData: (state, action: PayloadAction<RecordData>) => {
      state.apbsData = action.payload;
    },
    setInwardDate: (state, action: PayloadAction<string>) => {
      state.inwardDate = action.payload;
    },
    setSelectedFileName: (state, action: PayloadAction<string>) => {
      state.selectedFileName = action.payload;
    },
  },
});

export const { setApbsData, setInwardDate, setSelectedFileName } = makerModifySlice.actions;
export default makerModifySlice.reducer;