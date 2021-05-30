<script lang="ts">
    import {Router, Route} from "svelte-routing"
    import {globalHistory} from "svelte-routing/src/history"
    import {onDestroy, onMount} from "svelte"
    import {Home} from "./pages"
    import Navbar from "./components/navbar/index.svelte"

    let pathname = window.location.pathname.slice(1)
    let unsub: ReturnType<typeof globalHistory.listen> | undefined

    if (pathname === "") {
        pathname = "home"
    }

    onMount(() => {
        unsub = globalHistory.listen(({location}) => {
            pathname = location.pathname.slice(1)

            if (pathname === "") {
                pathname = "home"
            }
        })
    })

    onDestroy(() => {
        unsub?.()
    })
</script>

<Router>
    <Navbar bind:activePage={pathname} />
    <div>
        <Route path="/" exact component={Home} />
    </div>
</Router>
