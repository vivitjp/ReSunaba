// import { create } from "zustand"
// import { persist, createJSONStorage, StateStorage } from "zustand/middleware"
// import { get, set, del } from "idb-keyval" // can use anything: IndexedDB, Ionic Storage, etc.

// type PersistPerson = {
//   nameMap: Map<string, string>
// }

// export const usePersistLocalStorageMapSetStore = create<PersistPerson>()(
//   persist(
//     (set) => ({
//       nameMap: new Map,
//     }),
//     {
//       name: "persist-localStorage-map-set-person", //ユニークな判別名
//       storage: {
//         getItem: (name) => {
//           const str = localStorage.getItem(name)
//           return {
//             state: {
//               ...JSON.parse(str).state,
//               transactions: new Map(JSON.parse(str).state.transactions),
//             },
//           }
//         },
//         setItem: (name, newValue) => {
//           const str = JSON.stringify({
//             state: {
//               ...newValue.state,
//               transactions: Array.from(newValue.state.transactions.entries()),
//             },
//           })
//           localStorage.setItem(name, str)
//         },
//         removeItem: (name) => localStorage.removeItem(name),
//       },
//   )
// )
