const connection = require("../config/bd");

module.exports = {
    getBares: (req, res) => {
        try {
          const sql = "SELECT * FROM centros_consumo where categoria_id='3'";
          connection.query(sql, (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
              res.status(200).json(results);
              console.log(results);
            } else {
              res.status(404).json([])
            }
          });
        } catch (ex) {
          console.log(ex);
          res.status(500).json({ error: "Ha ocurrido un error" });
        }
      },
      
      getBaresHora: (req, res) => {
          try {
              const {id} = req.params;
            const sql = "SELECT hora_inicio, hora_final FROM centros_consumo_horarios where centro_consumo_id= ?";
            connection.query(sql, [id], (error, results) => {
              if (error) throw error;
              if (results.length > 0) {
                res.status(200).json(results);
                console.log(results);
              } else {
                res.status(404).json([])
              }
            });
          } catch (ex) {
            console.log(ex);
            res.status(500).json({ error: "Ha ocurrido un error" });
          }
        },
  
        getBaresDescripcion: (req, res) => {
          try {
              const {id} = req.params;
            const sql = "SELECT id, nombre, concepto_es, logo, img_portada FROM centros_consumo where id = ?";
            connection.query(sql, [id], (error, results) => {
              if (error) throw error;
              if (results.length > 0) {
                res.status(200).json(results);
                console.log(results);
              } else {
                res.status(404).json([])
              }
            });
          } catch (ex) {
            console.log(ex);
            res.status(500).json({ error: "Ha ocurrido un error" });
          }
        },
};