import { execSync } from "child_process";

function run(name, cmd) {
  try {
    console.log(`▶ ${name}...`);
    execSync(cmd, { stdio: "inherit" });
    console.log(`✔ ${name} passed`);
  } catch (err) {
    console.error(`✖ ${name} failed: ${err.message}`);
    process.exit(1);
  }
}

console.log("🏗️ Running pre-commit checks...\n");

run("Formatting check", "npm run format:check");
run("Lint check", "npm run lint");
run("Type check", "npm run typecheck");
run("Build", "npm run build");

console.log("\n✅ All checks passed. Ready to commit!");
