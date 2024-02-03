import type { Load } from "@sveltejs/kit"
import { compile } from "mdsvex"
import type { project } from "$lib/projects"
import { projects, nullProject } from "$lib/projects"
import fs from "fs"
import path from "path"

export const load: Load = async ({ params }) => {

    // Find the project with a matching id
    let project: project = projects.find((value) => {return value.id == params.slug}) ?? nullProject

    if (project != nullProject) {
        const mdFilePath = path.resolve("src/lib/projects", `${params.slug}.md`)
        
        const response = fs.readFileSync(mdFilePath, "utf8")

        const compiledResponse = await compile(response)

        return {
            project: project,
            content: compiledResponse?.code,
            exists: true
        }
    } else {
        return{
            project: project,
            content: undefined,
            exists: false
        }
    }
}