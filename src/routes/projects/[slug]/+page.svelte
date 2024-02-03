<script lang="ts">
    import type { project } from "$lib/projects"
    import { projects, nullProject } from "$lib/projects"

    export let data = {
        project: nullProject,
        content: "",
        exists: false
    };
</script>

{#if data.exists}

<div class="w-full md:h-[45rem] h-64">
    <img src={data.project.image} alt={data.project.image} class="w-full h-full object-cover opacity-60"/>
    <div class="w-full h-full px-4 -translate-y-full bg-gradient-to-t from-oxfordblue to-transparent flex flex-col justify-end">
        <p class="md:text-9xl text-4xl text-center font-extrabold">{data.project.name}</p>
        <p class="md:text-3xl text-lg text-center font-extralight py-8">{data.project.subtitle}</p>
    </div>
</div>
<div class="flex flex-wrap max-w-screen-xl p-4 justify-center mx-auto">
    {#each data.project.links ?? [] as link}
    <button class="md:w-80 w-full py-4 m-4 rounded-full bg-richblack border-almond md:border-4 border-2 md:text-lg text-xs hover:bg-almond hover:scale-110 hover:text-richblack transition duration-300 ease-out" on:click={() => window.location.href=link.url}>{link.text}</button>
    {/each}
</div>
<div class="markdown max-w-screen-xl md:mx-auto mx-4 my-8 md:p-16 p-8 md:pt-8 bg-richblack rounded-3xl">{@html data.content}</div>

{:else}

<div class="w-full h-[45rem]">
    <div class="w-full h-full flex flex-col justify-evenly">
        <p class="text-9xl text-center font-extrabold">404 Project Not Found</p>
        <p class="text-3xl text-center font-extralight py-8">Maybe check the link? Or go to the <a href="/projects" class="underline">projects page</a> and look for it there!</p>
    </div>
</div>

{/if}
