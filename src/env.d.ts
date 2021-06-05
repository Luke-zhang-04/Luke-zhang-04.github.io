/**
 * Luke Zhang's developer portfolio | https://Luke-zhang-04.github.io
 *
 * @license BSD-3-Clause
 * @copyright (C) 2020 - 2021 Luke Zhang
 */

/// <reference types="node" />

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

declare module "fuse.js/dist/fuse.basic.esm" {
    import * as mod from "fuse.js"

    export = mod
}

declare module "swiper/swiper.esm" {
    import * as mod from "swiper/core"

    export = mod
}

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: "production" | "development" | "test"
    }
}

declare module "*.png" {
    const url: string

    export default url
}

declare module "*.svg" {
    const url: string

    export default url
}

declare module "*.gif" {
    const url: string

    export default url
}

declare module "*.jpg" {
    const url: string

    export default url
}

declare module "*.jepg" {
    const url: string

    export default url
}

declare module "*.webp" {
    const url: string

    export default url
}

declare module "*.yml" {
    type YAMLValues = string | number | boolean | null | YAMLValues[] | {[key: string]: YAMLValues}

    const content: YAMLValues

    export = content
}

declare module "*.yaml" {
    type YAMLValues = string | number | boolean | null | YAMLValues[] | {[key: string]: YAMLValues}

    const content: YAMLValues

    export = content
}

declare module "svelte-markdown" {
    import type {MarkedExtension as MarkedConfig, Tokens} from "marked"
    import type {SvelteComponentTyped} from "svelte"

    type MarkedRendererProps<T extends {type: string; raw: string; text?: string}> = Partial<
        Omit<T, "type">
    >

    type InstantiableSvelteComponentTyped<
        Props extends Record<string, any> = any,
        Events extends Record<string, any> = any,
        Slots extends Record<string, any> = any,
    > = new (...args: any[]) => SvelteComponentTyped<Props, Events, Slots>

    type Renderers = {
        text: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Text>>
        paragraph: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Paragraph>>
        em: InstantiableSvelteComponentTyped<Omit<Tokens.Em, "type" | "text">>
        strong: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Strong>>
        hr: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Hr>>
        blockquote: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Blockquote>>
        del: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Del>>
        link: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Link>>
        image: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Image>>
        table: InstantiableSvelteComponentTyped<{}>
        tablehead: InstantiableSvelteComponentTyped<{}>
        tablebody: InstantiableSvelteComponentTyped<{}>
        tablerow: InstantiableSvelteComponentTyped<{}>
        tablecell: InstantiableSvelteComponentTyped<{}>
        list: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.List>>

        // Technically, listItem includes {type: string, tokens: []} in the props,
        // but that's probably unintentional
        listitem: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.ListItem>>
        heading: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Heading>>
        codespan: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Codespan>>
        code: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.Code>>

        // Note there's some weird behaviour involved with this ATM.
        /**
         * If the html is an inline element, it *should* be a Tag token (e.g `span`, `a`) If it's a
         * block element, it *should* be an HTML token (e.g `div`, `p`).
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#elements}
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#elements}
         */
        html: InstantiableSvelteComponentTyped<MarkedRendererProps<Tokens.HTML | Tokens.Tag>>
    }

    type Props = {
        /**
         * The Markdown source to be parsed.
         */
        source: string

        /**
         * An object where the keys represent a node type and the value is a Svelte component. This
         * object will be merged with the default renderers.
         */
        renderers?: Partial<Renderers>

        /**
         * Options for [marked](https://marked.js.org/using_advanced#options)
         */
        options?: MarkedConfig
    }

    export default class SvelteMarkdown extends SvelteComponentTyped<Props, {}, {default: {}}> {}
}
