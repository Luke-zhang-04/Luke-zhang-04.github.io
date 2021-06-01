/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

import type {default as Firebase} from "firebase/app"

declare const firebase: typeof Firebase

firebase.initializeApp({
    apiKey: "AIzaSyDKHbbyZoschUX1cMf5VdjRl9TtdIX1R9A",
    authDomain: "luke-zhang.firebaseapp.com",
    databaseURL: "https://luke-zhang.firebaseio.com",
    projectId: "luke-zhang",
    storageBucket: "luke-zhang.appspot.com",
    messagingSenderId: "309956853075",
    appId: "1:309956853075:web:ebb55b1076c4aca168f5a6",
})

export const auth = firebase.firestore()
export const firestore = firebase.firestore()

export const snapshotToArray = (
    snapshot: Firebase.firestore.QuerySnapshot<Firebase.firestore.DocumentData>,
): Firebase.firestore.QueryDocumentSnapshot<Firebase.firestore.DocumentData>[] => {
    const arr: ReturnType<typeof snapshotToArray> = []

    snapshot.forEach((doc) => arr.push(doc))

    return arr
}

export default {
    auth,
    firestore,
}
