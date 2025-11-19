CREATE TABLE "game_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"game_id" integer NOT NULL,
	"event_type" varchar(50) NOT NULL,
	"event_description" text NOT NULL,
	"response_type" varchar(20) NOT NULL,
	"response_text" text NOT NULL,
	"points_change" integer NOT NULL,
	"importance" varchar(20) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "games" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_name" varchar(100),
	"score" integer NOT NULL,
	"survived" boolean NOT NULL,
	"duration" integer NOT NULL,
	"final_time" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "game_events" ADD CONSTRAINT "game_events_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE no action ON UPDATE no action;