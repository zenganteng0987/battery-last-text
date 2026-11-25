import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The battery's last text to its charger: it forgives the charger, not the owner.
const entry =
  "Dear charger, I waited all day at 1% for you. He unplugged me at 2% to take a selfie. I forgive you. I do not forgive him. Goodbye.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry + "\n");
