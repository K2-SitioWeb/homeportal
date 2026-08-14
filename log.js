export const logsData = [
  {
    id: "LOG-001",
    title: "Actualización de seguridad crítica del Kernel",
    desc: "Se corrigió una vulnerabilidad de escalación de privilegios en Windows.",
    status: "rojo", // Opciones: 'verde', 'amarillo', 'rojo'
    category: "Parches y Avisos de Seguridad", // Coincide con tu filtro del menú
    content: `
      <h3>Detalles del Parche de Seguridad</h3>
      <p>Esta actualización soluciona un fallo crítico detectado en el subsistema del kernel. Se recomienda encarecidamente aplicar este parche en todos los entornos de producción.</p>
      <pre><code># Comando para verificar estado del parche Get-HotFix -Id KB5034441</code></pre>
      <p>Asegúrate de reiniciar el equipo tras la aplicación del script.</p>
    `
  },
  {
    id: "LOG-002",
    title: "Mantenimiento programado de servidores",
    desc: "Optimización de bases de datos y limpieza de caché general.",
    status: "amarillo",
    category: "Changelog",
    content: `
      <h3>Reporte de Mantenimiento</h3>
      <p>Durante la ventana de mantenimiento se realizaron tareas rutinarias para mejorar los tiempos de respuesta del catálogo.</p>
      <ul>
        <li>Limpieza de registros temporales.</li>
        <li>Optimización de índices SQL.</li>
      </ul>
    `
  },
  {
    id: "LOG-003",
    title: "Lanzamiento de la versión 2.4",
    desc: "Incorporación de nuevas herramientas de red y diagnóstico.",
    status: "verde",
    category: "Software Destacado del Mes",
    content: `
      <h3>Notas de la Versión 2.4</h3>
      <p>Ya se encuentra disponible la nueva compilación con mejoras estéticas en la barra lateral y soporte mejorado para scripts de ADB.</p>
    `
  }
];