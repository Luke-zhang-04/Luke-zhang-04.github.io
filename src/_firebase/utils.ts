/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

import type firebase from "firebase"

/**
 * `QueryDocumentSnapshot` has a `forEach` method, but no `map`, `filter`, etc.
 * `snapshotToArray` converts a firebase snapshot into an array
 * @param snapshot - firebase snapshot
 * @returns array of snapshots within the snapshot
 */
export const snapshotToArray = <T>(
    snapshot: firebase.firestore.QuerySnapshot<T>,
): firebase.firestore.QueryDocumentSnapshot<T>[] => {
    const result: firebase.firestore.QueryDocumentSnapshot<T>[] = []

    snapshot.forEach((doc) => result.push(doc))

    return result
}
