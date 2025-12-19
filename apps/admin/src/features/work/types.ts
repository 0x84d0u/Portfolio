
import { WorkModel } from '@portfolio/database'

export type WorkCreate = Omit<WorkModel, 'id' | 'createdAt' | 'updatedAt'>
export type WorkUpdate = Partial<WorkModel>
export type Work = WorkModel