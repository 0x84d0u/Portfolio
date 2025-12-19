"use server";

import { database } from "@portfolio/database";
import { WorkCreate, Work, WorkUpdate } from "./types";


export const fetchWork = async () => {
    try {
        const data = await database.work.findMany();
        return data;
    } catch (e : any) {
        return []
    }
}

export type WorkFormState = {
    error?: string
    fieldErrors?: Record<string, string>
}

export const createWork = async (
    prev: WorkFormState,
    fd: FormData
) => {
    const data: WorkCreate = {
        title: fd.get("title") as string,
        description: fd.get("description") as string,
        roles: fd.getAll("roles") as string[],
        period: fd.get("time") as string,
        organisation: fd.get("organisation") as string,
        address: fd.get("address") as string,
        location: fd.get("location") as Work['location'],
        contract: fd.get("contract") as Work['contract'],
    }

    // TODO: Validation

    try {
        await database.work.create({ data })
        console.log("Work created", data)
        return {}
    } catch (e: any) {
        return { error: "Failed to create work" }
    }

}

export const updateWork = async (
    prev: WorkFormState,
    fd: FormData
) => {
    const id = fd.get("id") as string;
    const data: WorkUpdate = {
        title: fd.get("title") as string,
        description: fd.get("description") as string,
        roles: fd.getAll("roles") as string[],
        period: fd.get("period") as string,
        organisation: fd.get("organisation") as string,
        address: fd.get("address") as string,
        location: fd.get("location") as Work['location'],
        contract: fd.get("contract") as Work['contract'],
    }

    // TODO: Validation

    try {
        await database.work.update({ where: { id }, data })
        console.log("Work uppdated", data)
        return {}
    } catch (e: any) {
        return { error: "Failed to update work" }
    }

}