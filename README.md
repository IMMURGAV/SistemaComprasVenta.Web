# Frontend Angular — Sistema de Compras y Ventas

La carpeta contiene una aplicación Angular 18 standalone, organizada por módulos funcionales (`autenticacion`, `compras`, `ventas`, `kardex`) y núcleo (`nucleo`). Usa Bootstrap 5 y es responsiva.

## Ejecución

1. Abra el proyecto y ejecute `npm install`.
2. Verifique que la API se ejecute en `https://localhost:5001`; si usa otro puerto, cambie `url` en `src/app/nucleo/servicios/api.servicio.ts`.
3. En la API, permita el origen de Angular (`http://localhost:4200`) en `Cors:OrigenFrontEnd` si usa `ng serve` sin SSL.
4. Ejecute `npm run inicio` y abra `http://localhost:4200`.
