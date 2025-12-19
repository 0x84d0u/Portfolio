"use server";

import { Work } from "./WorkForm";


export const fetchWork = async () => {
    return []
}

export const createWork = async (data: Omit<Work, 'id'>) => {
    console.log("Work created", data)
}

export const updateWork = async (data: Partial<Work>) => {
    console.log("Work updated", data)
}