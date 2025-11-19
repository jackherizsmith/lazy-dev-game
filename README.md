# 💼 Lazy Dev: The Office Survival Game

A satirical office simulation game where you play as a developer trying to do minimal work without getting fired. Navigate office life by choosing responses to junior developers, bug reports, and feature requests. Balance laziness points with task importance to survive until 5pm.

## 🎮 Game Rules

- **Starting Points**: 5 laziness points
- **Win Condition**: Survive until 5pm with > 0 points
- **Lose Condition**: Points reach 0 (fired and replaced by AI)

### Scoring System

- **Lazy Response**: +2 points (high risk)
- **Moderate Response**: +1 point (medium risk)
- **Diligent Response**: +0 points (safe)

### Task Importance (Point Penalties)

- **Low Importance**: -1 point
- **Medium Importance**: -2 points
- **High Importance**: -3 points
- **Critical**: -5 points (instant fire)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- Docker and Docker Compose
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lazy-dev-game
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the PostgreSQL database:
```bash
docker-compose up -d
```

5. Run database migrations:
```bash
DATABASE_URL="postgresql://lazyadmin:lazypass123@localhost:5432/lazy_dev_game" npx drizzle-kit migrate
```

6. Start the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How to Play

1. **Start Your Day** - Click "Start Your Day" to begin at 9:00am
2. **Read Events** - Each event shows the type (Junior Dev, Bug Report, or Feature Request) and importance level
3. **Choose Response** - Select Lazy (+2), Moderate (+1), or Diligent (+0)
4. **Manage Risk** - Lazy choices give more points but risk penalties based on task importance
5. **Survive to 5pm** - Complete all events without reaching 0 points

### Keyboard Shortcuts

- Press `1` for Lazy response
- Press `2` for Moderate response
- Press `3` for Diligent response

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Zustand** (state management)

### Backend
- **PostgreSQL** (database)
- **Drizzle ORM** (type-safe queries)
- **Next.js API Routes**

### DevOps
- **Docker** & **Docker Compose**
- **ESLint** & **Prettier**

## 📁 Project Structure

```
lazy-dev-game/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   ├── game/           # Game endpoints
│   │   └── leaderboard/    # Leaderboard endpoint
│   ├── game/               # Game page
│   └── page.tsx            # Home page
├── components/              # React components
│   ├── game/               # Game-specific components
│   └── ui/                 # Reusable UI components
├── lib/                     # Utilities and logic
│   ├── db/                 # Database schema and client
│   ├── game/               # Game logic (events, scoring, time)
│   ├── store/              # Zustand store
│   └── types/              # TypeScript types
├── drizzle/                # Database migrations
├── docker-compose.yml      # Development database setup
├── Dockerfile              # Production container
└── README.md
```

## 🎨 Features

- ✅ 30+ unique events across three categories
- ✅ Risk-based scoring system
- ✅ Keyboard shortcuts for quick play
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design (mobile & desktop)
- ✅ Dark mode support
- ✅ Database persistence
- ✅ Leaderboard system (API ready)
- ✅ Docker-ready for deployment

## 🐳 Docker Deployment

### Development

```bash
docker-compose up -d
```

### Production

Build the Docker image:
```bash
docker build -t lazy-dev-game .
```

Run the container:
```bash
docker run -p 3000:3000 \
  -e DATABASE_URL="your_database_url" \
  -e NEXT_PUBLIC_APP_URL="https://your-domain.com" \
  lazy-dev-game
```

## 🧪 Development

### Run Linting

```bash
npm run lint
```

### Format Code

```bash
npx prettier --write .
```

### Generate Database Migrations

```bash
npx drizzle-kit generate
```

### Run Migrations

```bash
DATABASE_URL="postgresql://..." npx drizzle-kit migrate
```

## 📊 Database Schema

### Games Table
- `id` - Primary key
- `player_name` - Optional player name
- `score` - Final score
- `survived` - Whether player survived
- `duration` - Game duration in seconds
- `final_time` - Time when game ended
- `created_at` - Timestamp

### Game Events Table
- `id` - Primary key
- `game_id` - Foreign key to games
- `event_type` - Type of event
- `event_description` - Event text
- `response_type` - Chosen response
- `response_text` - Response text
- `points_change` - Points gained/lost
- `importance` - Task importance level
- `created_at` - Timestamp

## 🎯 Future Enhancements

- [ ] Leaderboard UI page
- [ ] Player name input
- [ ] Sound effects
- [ ] Achievement system
- [ ] Multiple difficulty modes
- [ ] More event types
- [ ] Social sharing
- [ ] Analytics dashboard

## 📝 License

MIT License - Feel free to fork and modify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ and a healthy dose of procrastination
