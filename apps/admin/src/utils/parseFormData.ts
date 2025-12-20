export const parseFormData = (fd: FormData) => {
  const obj: Record<string, string | string[]> = {};

  for (const [key, value] of fd.entries()) {
    if (value instanceof File) continue;

    const v = value.toString(); // always string

    const existing = obj[key];

    if (existing === undefined) {
      obj[key] = v;
    } else if (Array.isArray(existing)) {
      existing.push(v);
    } else {
      obj[key] = [existing, v];
    }
  }

  return obj;
};
