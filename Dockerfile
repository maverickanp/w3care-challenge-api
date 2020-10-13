FROM node
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
EXPOSE 7781
COPY . .
RUN yarn run build
CMD ["node", "dist/app.js"]
