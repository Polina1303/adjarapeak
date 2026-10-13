// Small process-local caches: expired entries and rejected loads are never reused.
export function createAsyncCache<T>(ttlMs: number, maxEntries = 100) {
  const values = new Map<string, { value: T; expires: number }>();
  const pending = new Map<string, Promise<T>>();
  return async (key: string, loader: () => Promise<T>): Promise<T> => {
    const now = Date.now();
    for (const [entryKey, entry] of values) {
      if (entry.expires <= now) values.delete(entryKey);
    }
    const cached = values.get(key);
    if (cached) return cached.value;
    const running = pending.get(key);
    if (running) return running;
    const promise = Promise.resolve().then(loader).then((value) => {
      if (values.size >= maxEntries) values.delete(values.keys().next().value!);
      values.set(key, { value, expires: Date.now() + ttlMs });
      return value;
    }).finally(() => pending.delete(key));
    pending.set(key, promise);
    return promise;
  };
}
