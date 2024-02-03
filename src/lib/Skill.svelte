<script>
    export let name = "Skill"

    export let logoPath = "/svelte_logo.png"

    export let from = "rosequartz"
    export let to = "ultraviolet"

    // Compute the full class string before building to allow tailwind to generate the required classes.
    $: gradientClass = `bg-gradient-to-br from-${from} to-${to} md:h-64 h-40 rounded-3xl group cursor-pointer md:hover:-translate-y-4 transition duration-300 ease-out overflow-hidden`
</script>

<div class={gradientClass}>
    <p class="md:text-4xl text-xl font-extrabold w-3/5 md:my-10 my-6 md:mx-12 mx-6 group-hover:scale-110 transition duration-300 ease-out">{name}</p>
    <img src={logoPath} alt="svelte_logo" class="mr-0 ml-auto md:h-56 h-32 md:-translate-x-4 md:-translate-y-12 -translate-y-8 group-hover:scale-150 md:group-hover:translate-x-8 group-hover:translate-x-4 md:group-hover:-translate-y-24 group-hover:-translate-y-16 transition duration-300 ease-out">
</div>