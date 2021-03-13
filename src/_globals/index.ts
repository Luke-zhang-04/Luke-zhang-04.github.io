/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 * @copyright (C) 2020 - 2021 Luke Zhang
 * @license BSD-3-Clause
 */

/* eslint-disable @typescript-eslint/naming-convention */
export interface ProjectData {
    date: number,
    description: string,
    file: string,
    links: {
        GitHub?: string,
        PyPi?: string,
        NPM?: string,
        live?: string,
    },
    tags: string[],
    lang: {
        name: string,
        color: string,
    },
}
/* eslint-enable @typescript-eslint/naming-convention */

export enum Breakpoints {
    Xs = 0,
    Sm = 576,
    Md = 768,
    Lg = 992,
    Xl = 1200,
}
