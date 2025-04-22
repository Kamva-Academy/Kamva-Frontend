FROM node:18-alpine
LABEL name="Kamva Frontend"
RUN mkdir -p /app
WORKDIR /app
COPY . .

ARG NEXT_SHARP_PATH
ARG NEXT_PUBLIC_GOFTINO_TOKEN
ARG NEXT_PUBLIC_CLARITY_TOKEN
ARG NEXT_PUBLIC_GTM_ID

RUN npm install
RUN npm install sharp
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
