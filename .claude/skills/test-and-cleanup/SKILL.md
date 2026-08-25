---
name: test-and-cleanup
description: Use when testing the Hugo site locally with Pagefind search or cleaning up the repository by removing untracked files like node_modules.
---

# Test and Cleanup Skill

## Local Testing

To test the Hugo site locally with Pagefind search functionality:

1. **Build the site and generate search index:**
   ```bash
   npm run build
   ```

2. **Serve the site locally:**
   ```bash
   npm run serve
   ```

3. **Build and serve:**
   ```bash
   npm run build && npm run serve
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

## Local Testing Without Pagefind

```bash
rm -rf resources/
rm -rf public/
hugo server -D
```

## Repository Cleanup

To remove untracked files (like `node_modules`) from Git tracking without deleting them:

```bash
git rm -r --cached node_modules
```

Note: The `node_modules` directory is already in `.gitignore` and will not be tracked in future commits.
