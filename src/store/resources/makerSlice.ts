import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MakerModifyState {
  inwardDate: string;
  selectedFileName: string;
  showTable: boolean;
  batchData: BatchData[];
  recordData: RecordData[];
  fileNames: string[];
  selectedTxnStatus: string;
}

export interface BatchData {
  batchId: string;
  time: string;
  validationDate: string;
  totalRecord: number;
  successFullRecord: number;
  failedRecords: number;
  batchStatus: number;
  rejectionReason: string;
  responseFileGenerate: number;
  originalFileName: string;
}

export interface RecordData {
  apbItemSeqNo: string;
  accountNo: string;
  beneficiaryName: string;
  accountHolderName: string;
  amount: string;
  txnStatus: string;
  exceptionReason: string;
  userName: string;
}

export interface MakerModifyAction {
  type: string;
  payload: Partial<MakerModifyState>;
}

const initialState: MakerModifyState = {
  inwardDate: '',
  selectedFileName: '',
  showTable: false,
  batchData: [],
  recordData: [],
  fileNames: [],
  selectedTxnStatus: '',
};

const makerModifySlice = createSlice({
  name: 'makerModify',
  initialState,
  reducers: {
    setMakerModifyData(state, action: PayloadAction<Partial<MakerModifyState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setMakerModifyData } = makerModifySlice.actions;
export default makerModifySlice.reducer;
