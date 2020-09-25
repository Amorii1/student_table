import create from 'zustand'

const MsgStore = create(set => ({
    msg: '',
    setMsg: (msg) => set({ msg })
}))

export default MsgStore;