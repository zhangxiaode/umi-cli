export default {
  namespace: 'sider',
  state: {
    collapse: false,
    openKeys: []
  },
  reducers: {
    changeCollapse(state: any) {
      state.collapse = !state.collapse
      return {
        ...state
      }
    },
    changeOpenKeys(state: any, action: any) {
      state.openKeys = action.payload.openKeys
      return {
        ...state
      }
    }
  },
  effects: {
    // *clear(_:any, { put, call, select }: any): Generator {
    //   yield call(() => {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(resolve, 1000)
    //     })
    //   })
    //   const payload = yield select((state: any) => state.store.male)
    //   yield put({
    //     type: 'changeCollapse'
    //   })
    // }
  },
  subscriptions: {

  }
}