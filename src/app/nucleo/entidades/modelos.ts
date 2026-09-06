export interface Producto { idProducto:number; nombreProducto:string; nroLote:string; fecRegistro:string; costo:number; precioVenta:number; }
export interface DetalleOperacion { idProducto:number; cantidad:number; precio:number; }
export interface Operacion { detalles:DetalleOperacion[]; }
export interface ResumenKardex { idProducto:number; nombreProducto:string; stockActual:number; costo:number; precioVenta:number; }
export interface MovimientoProducto { fecRegistro:string; tipoMovimiento:string; cantidad:number; idDocumentoOrigen:number; }
