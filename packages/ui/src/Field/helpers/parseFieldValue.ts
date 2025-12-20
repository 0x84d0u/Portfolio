
export const parseFieldValue = (fd: FormData, name: string) => ({
  text: () => {
    const value = fd.get(name);
    if (typeof value === "string" && value.trim() !== "") return value;
    return undefined;
  },
  textarea: () => {
    const value = fd.get(name);
    if (typeof value === "string" && value.trim() !== "") return value;
    return undefined;
  },
  paragraph: () => {
    const raw = fd.get(name);
    if (typeof raw !== "string") return [];
    return raw.split("\n").map((s) => s.trim()).filter(Boolean);
  },
  list: () => {
    const values: string[] = [];
    let idx = 0;
    while (true) {
      const v = fd.get(`${name}[${idx}]`);
      if (v === null) break;
      if (typeof v === "string" && v.trim()) values.push(v.trim());
      idx++;
    }
    return values;
  },
  tags: () => {
    const raw = fd.get(name);
    if (typeof raw !== "string") return [];
    return raw.split(",").map((s) => s.trim()).filter(Boolean);
  },
  toggle: () => {
    const val = fd.get(name);
    return val === "on" || val === "true";
  },
  checkbox: () => {
    const val = fd.get(name);
    return val === "on" || val === "true";
  },
  checkboxes: () => {
    const values = fd.getAll(name);
    return values.filter(v => typeof v === "string") as string[];
  },
  radio: () => {
    const val = fd.get(name);
    return typeof val === "string" ? val : undefined;
  }
})
