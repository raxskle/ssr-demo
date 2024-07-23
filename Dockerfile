FROM node:18.20.3

# 复制
COPY ./ ./

WORKDIR ./

CMD ["npm", "run", "server"]