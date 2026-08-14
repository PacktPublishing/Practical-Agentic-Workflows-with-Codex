---
name: debug-and-verify
description: Use when given raw failing test output for a local project and asked to debug it. Fix one failure at a time, run npm run test after each fix, review the diff, and commit only after confirming all tests pass.
---

# Debug And Verify

## Workflow

Use this skill when the user provides raw `npm run test` output or asks to fix failing tests in this project.

1. Read the failure output carefully.
   - Identify the failing file, test name, assertion or parser error, expected value, received value, and stack location.
   - Start with the first concrete failure. Do not guess at unrelated bugs.

2. Inspect the smallest relevant code surface.
   - Read the failing test and the implementation it exercises.
   - Use `rg` first for related symbols, messages, and imports.
   - Respect project instructions and avoid silently fixing unrelated intentional exercises.

3. Make one focused fix.
   - Keep edits limited to the files needed for the current failure.
   - Preserve existing style and project conventions.
   - Do not add dependencies, routing, localStorage, real APIs, UI libraries, or CSS frameworks.

4. Verify incrementally.
   - Run `npm run test` immediately after each fix.
   - If tests still fail, treat the new output as the next input and repeat from step 1.
   - Continue until `npm run test` exits successfully.

5. Review the diff before committing.
   - Run a diff command such as `git diff -- <changed-files>` when the project is a git repo.
   - Confirm the diff only contains the intended fixes.
   - If unrelated user changes are present, leave them untouched and do not include them in the commit.

6. Commit the verified fix.
   - Check git status.
   - Stage only the files changed for this debugging task.
   - Commit with a message that confirms tests pass, for example:

```bash
git commit -m "Fix failing tests; npm run test passes"
```

## Reporting

In the final response, include:

- The files changed.
- The final `npm run test` result.
- The commit hash, if a commit was created.
- Any reason a commit could not be created, such as the project not being a git repo.
