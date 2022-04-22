export const keys: (e: any) => string[] = (e: any) => Object.keys(e)

export const values: (v: any) => any[] = (v: any) => keys(v).map(k => v[k as any])