# Use a imagem oficial do Node.js como base
FROM node:20

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que o aplicativo irá rodar
EXPOSE 3030

# Comando para rodar a aplicação
CMD ["npm", "start"]
