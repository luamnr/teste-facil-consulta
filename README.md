# facil-consulta

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
---

## Project setup docker
```
npm install
```

## Preparar os arquivos para produção
```
npm run build
```

## Criar o container configurado com nginx
```
docker build -t facil-consulta:1.0.0 .
```

## Executar o container
```
docker run -p 54321:54321 -d --name facil-consulta facil-consulta:1.0.0
```