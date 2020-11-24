const descripcion = {
  descripcion: {
    demand: true,
    alias: "d",
  },
};
const completado = {
  completado: {
    alias: "c",
    default: true,
  },
};
const argv = require("yargs")
  .command("crear", "crear un elemento por hacer", {
    descripcion,
  })
  .command("actualizar", "Actualiza el estado completado de una tareas", {
    descripcion,
    completado,
  })
  .command("borrar", "borra un elemento por hacer", {
    descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
