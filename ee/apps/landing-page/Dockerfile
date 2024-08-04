# Use uma imagem oficial do Node.js como base
FROM node:20-bullseye-slim AS base

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copie o arquivo de package.json e pnpm-lock.yaml para o diretório de trabalho
COPY package.json  ./

# Instale as dependências do projeto ignorando as verificações de dependências do workspace
RUN pnpm install --frozen-lockfile --ignore-workspace-root-check

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY ../../packages/billing .

# Build a aplicação para produção
RUN pnpm run build

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3003

# Comando para iniciar a aplicação
CMD ["pnpm", "start"]
