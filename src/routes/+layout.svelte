<script>
    import "../global.css"
</script>

<nav class="bg-richblack text-almond font-mono flex md:flex-row flex-col items-center justify-between p-4">
    <!-- <a href="/" class="text-4xl font-bold">HAROLD KWAN</a>
    <a href="/about" class="text-2xl px-8">About Me</a> -->
    <button class="text-3xl font-bold hover:scale-105 rounded-lg transition duration-300 ease-out my-auto md:mb-0 mb-4" on:click={() => window.location.href="/"}>>_ HAROLD KWAN</button>
    <div class="flex flex-row items-center justify-around">
        <button class="md:text-lg text-xs px-8 py-2 hover:bg-oxfordblue hover:scale-110 hover:underline rounded-lg transition duration-300 ease-out" on:click={() => window.location.href="/about"}>About</button>
        <button class="md:text-lg text-xs px-8 py-2 hover:bg-oxfordblue hover:scale-110 hover:underline rounded-lg transition duration-300 ease-out" on:click={() => window.location.href="/projects"}>Projects</button>
        <button class="md:text-lg text-xs px-8 py-2 hover:bg-oxfordblue hover:scale-110 hover:underline rounded-lg transition duration-300 ease-out" on:click={() => window.location.href="/blog"}>Blog</button>
    </div>
</nav>

<main class="text-almond font-mono">
    <slot></slot>
</main>

<footer class="bg-ultraviolet text-almond font-mono h-32 flex items-center align-center p-8">
    <p class="m-auto md:text-lg text-xs">Website design and development by Harold Kwan. This project is open source on <a class="text-rosequartz underline" href="https://github.com/brainstormerjr/portfolio-2.0">GitHub</a>.</p>
</footer>

<style>
</style>