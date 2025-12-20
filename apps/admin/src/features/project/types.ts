import z from 'zod';
import { ProjectCategory, ProjectStatus } from '../../generated/prisma/enums'
export { ProjectCategory, ProjectStatus } from '../../generated/prisma/enums'
export type { ProjectModel } from '../../generated/prisma/models'

export const ProjectContentSchema = z.object({
  overview: z.array(z.string().min(1)).optional(),
  keyFeatures: z.array(z.string().min(1)).optional(),
  technologies: z.array(z.string().min(1)).optional(),
  whatILearned: z.array(z.string().min(1)).optional(),
  futureImprovements: z.array(z.string().min(1)).optional(),
});

export const ProjectLinkSchema = z.object({
  label: z.string().min(1),
  href: z.url(),
});

export const ProjectLinksSchema = z.array(ProjectLinkSchema);

export const CreateProjectSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  description: z.string().optional().nullable().default(null),

  category: z.enum(Object.values(ProjectCategory)).default(ProjectCategory.other),
  status: z.enum(Object.values(ProjectStatus)).default(ProjectStatus.upcoming),
  hidden: z.boolean().default(true),

  imageUrl: z.string().optional().nullable().default(null),

  links: ProjectLinksSchema.optional().nullable().default(null),
  content: ProjectContentSchema.optional().nullable().default(null),
});

export const UpdateProjectSchema = CreateProjectSchema.partial();
