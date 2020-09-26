import create from "zustand";

const StudentStore = create((set) => ({
  name: null,
  age: null,
  address: null,
  gender: null,
  data: [],
  isModal: false,
  isSearching: false,
  search: null,
  setIsModal: (isModal) => set({ isModal }),
  setData: (data) => set({ data}),
  setName: (name) => set({ name}),
  setAge: (value) => set({ age: value }),
  setAddress: (value) => set({ address: value }),
  setGender: (value) => set({ gender: value }),
  setIsSearching: (value) => set({ isSearching: value }),
  setSearch: (value) => set({ search: value }),
}));

export default StudentStore;