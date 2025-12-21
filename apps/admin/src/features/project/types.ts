import z from 'zod';
import { ProjectCategory, ProjectStatus } from '../../generated/prisma/enums'
export { ProjectCategory, ProjectStatus } from '../../generated/prisma/enums'
export type { ProjectModel } from '../../generated/prisma/models'

export const ProjectSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  description: z.array(z.string()).default([]),

  category: z.enum(Object.values(ProjectCategory)).default(ProjectCategory.other),
  status: z.enum(Object.values(ProjectStatus)).default(ProjectStatus.upcoming),
  hidden: z.boolean().default(true),

  imageUrl: z.string().optional().nullable().default(null),

  links: z.record(z.string(), z.string()).optional().default({}),
  content: z.record(z.string(), z.array(z.string())).optional().default({}),
});

export const UpdateProjectSchema = ProjectSchema.partial();
