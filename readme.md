# A modified version of https://github.com/Trobyss/deno-api-rest-jwt

## Copy .env.example to .env and modify it with your config

`cp .env.example .env`

## Install

- install [denon](https://deno.land/x/denon/)

## Run

`denon start`

## Update Cache

`deno run -r app.ts` then `denon start`

## Run migration

`deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate`

Migration uses https://deno.land/x/nessie