/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
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

type Firestore = Firebase.firestore.Firestore
type Functions = Firebase.functions.Functions

export const firestore: Firestore = firebase.firestore?.()
export const functions: Functions = firebase.functions?.()
