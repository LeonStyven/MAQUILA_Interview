# MoviesShop — Prueba Técnica (En progreso)

Este proyecto implementa la Home de **moviesshop.co** con un **minicarrito funcional**, basado en React + TypeScript, Context API y Tailwind. Incluye backend en Node/Express con MongoDB para persistir **órdenes**.

> ⚠️ Estado: **en proceso de culminarse**. Falta pulir detalles de UI/UX, la vista `/admin` y algunos ajustes menores.

---

## Características (hasta ahora)

- Navbar fijo con **minicarrito (SideNav)**.
- **CartContext** con `add/update/remove/clear`, **persistencia en localStorage**.
- Badge con cantidad total en el icono del carrito.
- Mini-cart con **stepper de cantidades**, **eliminar**, **total** y **checkout**.
- Backend con **/api/orders** (POST/GET) y esquema Mongoose `Order`.

---

## Requisitos

- Node.js **>= 16**
- MongoDB (URI en `.env`)

---

## Configuración

Crea un archivo `.env` en `src/` (server) con:

PORT=4000
CORS_ORIGIN=http://localhost:4200
DB_CONNECTION=mongodb+srv://<user>:<pass>@<cluster>/<dbName>?retryWrites=true&w=majority&appName=<appName>

---

## Cómo correr

### 1) Backend (Node/Express)
```bash
# desde la raíz del repo
node src/index.js
# server en: http://localhost:4000
# health:    http://localhost:4000/health
# health db: http://localhost:4000/health/db

```
### 2) Frontend (React/Vite)

```bash
npm run dev
```

