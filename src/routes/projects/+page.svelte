<script lang="ts">
    import Project from "$lib/Project.svelte";
    import { projects } from "$lib/projects"
</script>

<div class="md:p-16 p-8 max-w-screen-xl mx-auto">
    <p class="md:text-7xl text-3xl text-center font-extrabold">&lt;My Projects/&gt;</p>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8 my-16">
        {#each projects as project}
        <Project project={project}/>
        {/each}
    </div>
</div>