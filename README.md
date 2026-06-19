# DesingLab-I-2026

Guia rapida para correr el proyecto (backend + frontend).

## Estructura
- `live-electric.sql`: script de la base de datos.

README.md
2 KB
﻿
Noob Lizard
nooblizard
 
# DesingLab-I-2026

Guia rapida para correr el proyecto (backend + frontend).

## Estructura
- `live-electric.sql`: script de la base de datos.
- `Live-Electric-API/`: backend (Node.js + Express).
- `Live-Electric-Front/`: frontend (React + Vite).

## Requisitos
- Node.js instalado (recomendado v18 o superior).
- MySQL instalado y ejecutandose.

## 1) Base de datos
1. Crea una base de datos llamada `live-electric`.
2. Importa el archivo `live-electric.sql` en esa base.
3. Revisa la conexion del backend en `Live-Electric-API/base-datos.js`:
	- host: `127.0.0.1`
	- user: `root`
	- password: `''` (vacio)
	- database: `live-electric`

Si tu usuario o password de MySQL es diferente, cambialo en ese archivo.

## 2) Backend
En una terminal:

```bash
npm install
npm run dev
```

OJO: "npm install" se corre solo la primera vez 

El backend corre en: `http://localhost:4000`

## 3) Frontend
En otra terminal:

```bash
npm install
npm run dev
```

OJO: "npm install" se corre solo la primera vez 

Vite mostrara en consola la URL del frontend (normalmente `http://localhost:5173`).

## Orden recomendado para iniciar
1. Iniciar MySQL.
2. Cargar base de datos.
3. Levantar backend.
4. Levantar frontend.
