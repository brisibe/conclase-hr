import { Employee } from './Employee';

export interface Project {
    id: string,
    projectName: string,
    clientName: string,
    type: string,
    budget: string,
    duration: string,
    Manager?: Employee,
    teamMembers?: Employee[],
}