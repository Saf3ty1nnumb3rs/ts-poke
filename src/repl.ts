export function cleanInput(input: string): string[] {
  return input
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 0);
}
