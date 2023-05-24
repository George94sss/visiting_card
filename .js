version: "3"

services:
  server:
    build: app/
    command: npm run dev
    restart: always
    ports:
      - 80:8080

  # bot:
  #   build: bot/
  #   # command: python index.py
  #   network_mode: host
  #   depends_on:
  #     - server