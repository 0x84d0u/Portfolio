export type ZodDataType = 'string' | 'string[]' | 'number' | 'boolean' | 'date' | 'any';

export type ZodResolvedSchema = {
    id: string,
    dataType: ZodDataType,
    isRequired: boolean
    name: string
}
