FROM node:16-alpine AS deps
WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install --production=true --frozen-lockfile
RUN yarn autoclean --force

COPY . .


FROM node:16-alpine AS builder
WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build


FROM node:16-alpine AS runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 8080
CMD ["node", "dist/index.js"]