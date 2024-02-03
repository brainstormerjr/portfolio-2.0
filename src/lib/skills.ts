export interface skill {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    logo: string;
}

export class Skills {
    public static SvelteKit: skill = {
        name: "SvelteKit",
        primaryColor: "orange-600",
        secondaryColor: "white",
        logo: "svelte_logo.png"
    }

    public static Vue: skill = {
        name: "Vue",
        primaryColor: "emerald-600",
        secondaryColor: "white",
        logo: "vue_logo.png"
    }
    
    public static Flutter: skill ={
        name: "Flutter",
        primaryColor: "cyan-600",
        secondaryColor: "white",
        logo: "flutter_logo.png"
    }
    
    public static SASS: skill = {
        name: "SASS/SCSS",
        primaryColor: "pink-400",
        secondaryColor: "white",
        logo: "sass_logo.png"
    }
    
    public static Unity: skill = {
        name: "Unity/C#",
        primaryColor: "ultraviolet",
        secondaryColor: "white",
        logo: "unity_logo.png"
    }
    
    public static Python: skill = {
        name: "Python",
        primaryColor: "blue-600",
        secondaryColor: "yellow-100",
        logo: "python_logo.png"
    }
    
    public static Processing: skill = {
        name: "Processing",
        primaryColor: "blue-600",
        secondaryColor: "white",
        logo: "processing_logo.png"
    }
    
    public static HTML: skill = {
        name: "HTML",
        primaryColor: "orange-600",
        secondaryColor: "white",
        logo: "html_logo.png"
    }
    
    public static NodeJs: skill = {
        name: "Node.js",
        primaryColor: "lime-700",
        secondaryColor: "white",
        logo: "nodejs_logo.png"
    }
}

export let skillList = [
    Skills.SvelteKit,
    Skills.Vue,
    Skills.Flutter,
    Skills.SASS,
    Skills.Unity,
    Skills.Python,
    Skills.Processing,
    Skills.HTML,
    Skills.NodeJs
]