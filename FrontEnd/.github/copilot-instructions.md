# Copilot Instructions for AI Agents

## Arquitectura General
- Este proyecto es un frontend Angular (CLI v20+) para un sistema de tickets, estructurado en módulos de páginas (`src/app/pages/`) y servicios (`src/app/services/`).
- El flujo principal: los usuarios interactúan con componentes en `src/app/pages/`, que comunican con servicios (por ejemplo, `auth.service.ts`, `ticket.service.ts`) para lógica de negocio y acceso a datos.
- Los servicios gestionan la comunicación con APIs externas (no incluidas en este repo).

## Convenciones y Patrones
- Los componentes de página están organizados por roles: `admin`, `login`, `staff`, `user`.
- Cada página tiene archivos `.ts`, `.html`, `.css` y `.spec.ts` para lógica, vista, estilos y pruebas.
- Los servicios se ubican en `src/app/services/` y siguen el patrón Angular de inyección de dependencias.
- Las rutas de la app se configuran en `src/app/app.routes.ts`.
- Los estilos globales están en `src/styles.css`.

## Flujos de Desarrollo
- **Servidor de desarrollo:** `ng serve` o `npm start` (tarea VS Code disponible).
- **Build:** `ng build`.
- **Pruebas unitarias:** `ng test` o `npm test` (tarea VS Code disponible).
- **Scaffolding:** `ng generate component <nombre>` para nuevos componentes.
- **E2E:** `ng e2e` (requiere configuración adicional).

## Integraciones y Dependencias
- Angular CLI y dependencias gestionadas en `package.json`.
- No hay configuración personalizada de Webpack ni integraciones externas en el frontend.
- El backend/API no está incluido; los servicios asumen endpoints externos.

## Ejemplos de Patrones
- Para agregar una nueva página/rol, crea una carpeta en `src/app/pages/` y sigue la estructura de los existentes.
- Para agregar lógica de negocio, crea/edita servicios en `src/app/services/` y usa inyección en los componentes.
- Para modificar rutas, edita `src/app/app.routes.ts`.

## Recomendaciones para Agentes
- Prioriza la reutilización de servicios y componentes existentes.
- Mantén la estructura modular y la separación de roles.
- Usa los comandos Angular CLI para scaffolding y pruebas.
- Consulta el README para flujos estándar y comandos útiles.

## Archivos Clave
- `src/app/pages/` — Componentes por rol/página
- `src/app/services/` — Servicios de negocio/API
- `src/app/app.routes.ts` — Configuración de rutas
- `src/styles.css` — Estilos globales
- `README.md` — Flujos y comandos principales

---
Actualiza estas instrucciones si se agregan nuevas convenciones, integraciones o flujos relevantes.