<script lang="ts">
    import {Router, Link, Route} from "svelte-routing"
    import {Home} from "./pages"

    export let url = ""
</script>

<Router {url}>
    <nav>
        <Link to="/">Home</Link>
    </nav>
    <div>
        <Route path="/" exact component={Home} />
    </div>
</Router>
