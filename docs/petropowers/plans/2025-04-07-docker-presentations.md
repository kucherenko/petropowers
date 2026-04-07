# Docker Presentations Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create Docker infrastructure to serve the PetroPowers presentations via nginx on port 80.

**Architecture:** Single nginx:alpine container serving static files from `docs/presentations/`. Dockerfile copies presentation files into the container image. Docker Compose orchestrates the service with port 80 mapping.

**Tech Stack:** Docker, nginx:alpine, docker-compose

---

### Task 1: Create Dockerfile

**Files:**
- Create: `docs/presentations/Dockerfile`

- [ ] **Step 1: Create Dockerfile with nginx configuration**

Create `docs/presentations/Dockerfile`:

```dockerfile
FROM nginx:alpine

# Copy presentation files to nginx default directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx (default CMD from base image)
```

- [ ] **Step 2: Commit Dockerfile**

```bash
git add docs/presentations/Dockerfile
git commit -m "feat: add Dockerfile for presentations nginx container"
```

---

### Task 2: Create Docker Compose Configuration

**Files:**
- Create: `docs/presentations/docker-compose.yml`

- [ ] **Step 1: Create docker-compose.yml with nginx service**

Create `docs/presentations/docker-compose.yml`:

```yaml
services:
  presentations:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
    container_name: petropowers-presentations
    restart: unless-stopped
```

- [ ] **Step 2: Commit docker-compose.yml**

```bash
git add docs/presentations/docker-compose.yml
git commit -m "feat: add docker-compose for presentations service"
```

---

### Task 3: Verify Docker Setup

**Files:**
- None (verification only)

- [ ] **Step 1: Build and test the Docker container**

```bash
cd docs/presentations && docker compose build
```

Expected: Build completes successfully with no errors.

- [ ] **Step 2: Start the container**

```bash
cd docs/presentations && docker compose up -d
```

Expected: Container starts successfully, name `petropowers-presentations`.

- [ ] **Step 3: Verify presentation is accessible**

```bash
curl -I http://localhost
```

Expected: HTTP 200 response headers from nginx.

- [ ] **Step 4: Stop and clean up container**

```bash
cd docs/presentations && docker compose down
```

Expected: Container stops and is removed.

---

## Usage

After setup, run presentations with:

```bash
cd docs/presentations
docker compose up -d
# Access at http://localhost
docker compose down  # Stop
```