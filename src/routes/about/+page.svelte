<script>
    import Skill from "$lib/Skill.svelte"
    import { skillList } from "$lib/skills"
</script>

<div class="md:p-16 p-8 max-w-screen-xl mx-auto">
    <p class="md:text-7xl text-3xl text-center font-extrabold">&lt;About Me/&gt;</p>

    <!-- BASIC INFORMATION -->
    <p class="md:text-xl text-xs mt-16 md:mb-8">Here is a little bit about myself:</p>
    <div class="my-12 max-w-screen-lg mx-auto md:text-xl text-xs">
        <div class="md:h-12 h-8 bg-ultraviolet md:rounded-t-3xl rounded-t-xl pl-2 pr-4 flex justify-between items-center">
            <div class="h-full flex ml-0">
                <div class="h-1/2 aspect-square bg-red-500 rounded-full md:mx-2 mx-1 my-auto"></div>
                <div class="h-1/2 aspect-square bg-yellow-500 rounded-full md:mx-2 mx-1 my-auto"></div>
                <div class="h-1/2 aspect-square bg-green-500 rounded-full md:mx-2 mx-1 my-auto"></div>
            </div>
            <p class="md:text-xs text-[0.5rem]">harold/basic_information.js</p>
        </div>
        <div class="bg-richblack md:p-8 p-4 text-white md:rounded-b-3xl rounded-b-xl overflow-scroll">
    
<pre><span class="text-gray-500">// Who am I? Oh where to begin. I am a:</span>
<span class="text-pink-400">let</span> harold = <span class="text-yellow-300">[</span>
    <span class="text-blue-300">"Software Developer"</span>, <span class="text-gray-500">// Mainly game and web dev.</span>
    <span class="text-blue-300">"Designer"</span>, <span class="text-gray-500">// I have a passion for UI/UX and game design.</span>

    <span class="text-gray-500">// The following skills may not be relevant to the job.</span>
    <span class="text-blue-300">"Comic Artist"</span>
    <span class="text-blue-300">"Speed-Cuber"</span>
    <span class="text-blue-300">"Badminton Player"</span>
<span class="text-yellow-300">]</span></pre>
            
        </div>
    </div>

    <!-- SKILLS -->
    <p class="md:text-xl text-xs my-8">Here is a little list of everything that I can do (for now):</p>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
        {#each skillList as skill}
        <Skill name={skill.name} from={skill.primaryColor} to={skill.secondaryColor} logoPath={`/skills/${skill.logo}`}/>
        {/each}
    </div>

    

</div>

<style>
</style>