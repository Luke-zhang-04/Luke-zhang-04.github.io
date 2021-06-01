/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

declare module "svelte-routing/src/history" {
    const getLocation: (source: typeof window) => Location & {state: any; key: string}

    type Listener = (params: {
        location: ReturnType<typeof getLocation>
        action: "POP" | "PUSH"
    }) => void

    export const createHistory: (source: typeof window) => {
        readonly location: ReturnType<typeof getLocation>
        listen: (listener: Listener) => () => void
        navigate: (to?: string | null, options?: {replace: boolean; state: any}) => void
    }

    type StackItem = {pathname: string; search: string}

    export const createMemorySource: (initialPathname?: string) => {
        readonly location: StackItem
        // These functions seem to have no implimentation
        // addEventListener: typeof window.addEventListener
        // removeEventListener: typeof window.removeEventListener
        history: {
            readonly entries: StackItem[]
            readonly index: number
            readonly state: any
            pushState: (state: any, _: unknown, uri: string) => void
            replaceState: (state: any, _: unknown, uri: string) => void
        }
    }

    export const globalHistory: ReturnType<typeof createHistory>
    export const navigate: ReturnType<typeof createHistory>["navigate"]
}

declare module "swiper/swiper.esm" {
    const mod: typeof import("swiper/core")

    export = mod
}
