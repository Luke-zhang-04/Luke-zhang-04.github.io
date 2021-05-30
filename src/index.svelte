<script lang="ts">
    import {Router, Route} from "svelte-routing"
    import {globalHistory} from "svelte-routing/src/history"
    import {onDestroy, onMount} from "svelte"
    import {Home} from "./pages"
    import Navbar from "./components/navbar/index.svelte"

    let pathname = window.location.pathname
    let unsub

    onMount(() => {
        unsub = globalHistory.listen(({location, action}) => {
            console.log(location, action)
            pathname = location.pathname
        })
    })

    onDestroy(() => {
        unsub()
    })
</script>

<Router>
    <Navbar />
    <div>
        <Route path="/" exact component={Home} />
    </div>
</Router>
