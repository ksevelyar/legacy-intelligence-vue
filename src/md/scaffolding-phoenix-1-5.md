---
title: Scaffolding Phoenix 1.5 JSON API
tags:
  - phoenix
---


# Scaffolding Phoenix 1.5 JSON API

## Create app

```bash
mix phx.new hydroponics-phoenix --app hydroponics_phoenix --no-webpack --no-html
```

## Generate products

```bash
mix phx.gen.context Products Product products name:string:unique desc:text image_url:string slug:string:unique is_active:boolean tags:array:integer categories:array:integer centi_price:integer
```

```bash
mix phx.gen.json Products Product products centi_price:integer name:string desc:string slug:string image_url:string is_active:boolean --no-context --no-schema
```

## Generate users

```bash
mix phx.gen.context Auth Client clients email:string:unique first_name:string last_name:string address:text is_active:boolean password_hash:string phone:string
```

```bash
mix phx.gen.json Auth Client clients email:string password:string is_active:boolean phone:string address:string first_name:string last_name:string --no-context --no-schema
```

```bash
mix phx.gen.context Auth Admin admins email:string:unique first_name:string last_name:string is_active:boolean password_hash:string
```

```bash
mix phx.gen.json Auth Admin admins email:string password:string is_active:boolean first_name:string last_name:string --no-context --no-schema
```
