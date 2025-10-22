import { create } from 'zustand'
import { Projects } from './Projects'
import { ProjectType } from '@/types'

interface ProjectState {
    Projects: ProjectType[],
    num_of_Projects:number
  }

export const UseProjectState = create<ProjectState>((set) => ({
  Projects: Projects,
  num_of_Projects:Projects.length
}))