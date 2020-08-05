/**
 * Luke Zhang's developer portfolio
 * Copyright (C) 2020 Luke Zhang Luke-zhang-04.github.io
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * @file houses firebase configuration and variables
 */
/* eslint-disable one-var */

declare type Firebase = typeof import("firebase/app")
declare const firebase: Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDKHbbyZoschUX1cMf5VdjRl9TtdIX1R9A",
    authDomain: "luke-zhang.firebaseapp.com",
    databaseURL: "https://luke-zhang.firebaseio.com",
    projectId: "luke-zhang",
    storageBucket: "luke-zhang.appspot.com",
    messagingSenderId: "309956853075",
    appId: "1:309956853075:web:ebb55b1076c4aca168f5a6"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth(),
    firestore = firebase.firestore()
