import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  notes: [],
  isLoading: false,
  filterNotes: [],
  activateLink: "",
};

export const getNotes = createAsyncThunk(
  "noteSlice/getNotes",
  async (arg, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get("/note");
      dispatch(setFilterNotes(data.data));
      dispatch(setActivateLink("All Categories"));
      return data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.message);
    }
  }
);

export const saveNote = createAsyncThunk(
  "noteSlice/saveNote",
  async (arg, { dispatch, rejectWithValue }) => {
    try {
      await axios.post("/note", arg);
      dispatch(getNotes());
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.message);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "noteSlice/deleteNote",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`/note/${id}`);
      dispatch(getNotes());
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const updateNote = createAsyncThunk(
  "noteSlice/updateNote",
  async (arg, { dispatch, rejectWithValue }) => {
    try {
      await axios.put(`/note/${arg._id}`, arg);
      dispatch(getNotes());
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFilterNotes: (state, action) => {
      state.filterNotes = action.payload;
    },
    setActivateLink: (state, action) => {
      state.activateLink = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNotes.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getNotes.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });

    builder.addCase(saveNote.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(saveNote.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(saveNote.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });

    builder.addCase(deleteNote.rejected, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(updateNote.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setLoading, setActivateLink, setFilterNotes } =
  noteSlice.actions;

export default noteSlice.reducer;
