<script lang="ts">
    import type { project } from "$lib/projects.ts"

    export let project: project
</script>

<button class="bg-black md:rounded-3xl rounded-xl aspect-image group cursor-pointer md:hover:-translate-y-4 transition duration-300 ease-out overflow-hidden text-left" on:click={() => window.location.href=`/projects/${project.id}`}>
    <img src={`/projects/${project.image}`} alt={project.image} class="w-full h-full object-cover group-hover:opacity-20 group-hover:blur-sm group-hover:scale-110 transition duration-300 ease-out static"/>
    <div class="w-full h-full md:p-8 p-4 group-hover:-translate-y-full transition duration-300 ease-out z-10 flex flex-col justify-end">
        <img src={`/skills/${project.skill.logo}`} alt="logo" class="md:w-32 w-20 top-0 ml-auto mb-auto">
        <p class="md:text-6xl text-xl font-extrabold">{project.name}</p>
        <p class="md:text-xl text-xs mt-4">{project.subtitle}</p>
    </div>
</button>

