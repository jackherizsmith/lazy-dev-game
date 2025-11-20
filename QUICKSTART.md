# 🚀 Quick Start Guide

Get **Lazy Dev** running in 5 minutes!

## Prerequisites

- Node.js 20+
- Docker Desktop (for the database)

## Installation

1. **Navigate to the project:**

```bash
cd lazy-dev-game
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the database:**

```bash
docker-compose up -d
```

4. **Run migrations:**

```bash
DATABASE_URL="postgresql://lazyadmin:lazypass123@localhost:5432/lazy_dev_game" npx drizzle-kit migrate
```

5. **Start the dev server:**

```bash
npm run dev
```

6. **Play the game:**
   Open [http://localhost:3000](http://localhost:3000)

## Game Controls

- **Click** the response buttons, OR
- Press **1** for Lazy (+2 points, high risk)
- Press **2** for Moderate (+1 point, medium risk)
- Press **3** for Diligent (+0 points, safe)

## Tips

- Start with 1 laziness points
- Reach 0 points = FIRED (replaced by AI)
- Survive all events = WIN!
- Critical tasks are dangerous with lazy responses
- Low importance tasks are safer to be lazy on

## Stopping

```bash
# Stop dev server: Ctrl+C

# Stop database:
docker-compose down
```

## Troubleshooting

**Port 5432 already in use:**

```bash
# Check what's using the port
lsof -i :5432

# Stop other PostgreSQL instances or change port in docker-compose.yml
```

**Database connection error:**

```bash
# Make sure database is running
docker-compose ps

# Restart database
docker-compose restart
```

**Build errors:**

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

---

Ready to procrastinate? **Start Your Day!** 💼
