export const delay = (func: (() => void) | null, ms: number): Promise<void> =>
  new Promise((resolve) =>
    setTimeout(() => {
      func?.();
      resolve();
    }, ms)
  );
