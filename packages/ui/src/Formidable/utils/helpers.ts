import { PathKind } from "../types/path.types";

export const isKind = (current: PathKind ,...choices: PathKind[]) => choices.includes(current);
