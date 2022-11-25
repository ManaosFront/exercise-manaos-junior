export const objectEntries = <K extends string, V>(obj: Record<K, V>) =>
  Object.entries(obj) as [K, V][];

/** generate a short key mostly unique (9007199254740991 possibilities) with digit & lowerCase letters only */
export const generateKey = () =>
  Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
