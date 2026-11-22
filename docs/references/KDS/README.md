# Referencias visuales del flujo KDS

Estas referencias documentan estados del prototipo. Son guías visuales, no
activos funcionales ni evidencia de sincronización con producción.

| Referencia | Estado cubierto | Implementación asociada |
| --- | --- | --- |
| `01- KDS · COMANDAS · COCINA CENTRAL.png` | Tablero base de comandas | `#kds` |
| `02- KDS · COMANDAS · COCINA CENTRAL.png` | Comanda nueva y acción de inicio | `#kds`, `Nuevos` |
| `03- KDS · COMANDA #4590 · MESA 07.png` | Detalle, productos y restricción | `#kds-order-4590` |
| `04- KDS · EXCEPCIONES Y SINCRONIZACIÓN · 1280x800.png` | Excepción y sincronización simulada | Aviso DEMO / desconexión |
| `05- KDS · TV SIN INTERACCIÓN · 1280x800.png` | Referencia de lectura a distancia | Encabezado KDS |
| `06- KDS · ACCIÓN COMPLETADA · 1280x800.md` | Confirmación de transición o entrega | Aviso visible de acción DEMO |

La sexta referencia se documenta como estado propuesto porque no existe una
captura adicional en el repositorio. El flujo puede recorrerse con las
acciones `Iniciar preparación`, `Marcar como listo` y `Entregar pedido`.
