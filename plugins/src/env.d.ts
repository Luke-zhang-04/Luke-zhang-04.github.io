/// <reference types="node" />

declare module "htmlnano" {
    export const process: (
        html: string,
        options: {[key: string]: unknown},
    ) => Promise<{html: string}>
}
