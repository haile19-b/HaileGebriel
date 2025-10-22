import { create } from 'zustand'
import { Projects } from './Projects'
import { ProjectType, SkillType } from '@/types'
import { Skills } from './Skills'

interface ProjectState {
    ProjectsItems: ProjectType[],
    num_of_Projects:number
  }

interface skillState {
  SkillItems:SkillType[],
}

export const UseProjectState = create<ProjectState>((set) => ({
  ProjectsItems: Projects,
  num_of_Projects:Projects.length
}))

export const UseSkillState = create<skillState>((set)=>({
  SkillItems:Skills
}))