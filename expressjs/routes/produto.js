var express = require('express');
var router = express.Router();
const connection = require('../db');

// Endpointe: /produto

// Criando um produto 
router.post('/', (req, res) => {
    const { nome, descricao, preco } = req.body;
    const query = 'INSERT INTO Produto (nome, descricao, preco) VALUES (?, ?, ?)';
    connection.query(query, [nome, descricao, preco], (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(`Produto adicionado com ID: ${results.insertId}`);
      }
    });
  });

// READ - Obter todos os produtos
router.get('/', (req, res) => {
    connection.query('SELECT * FROM Produto', (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  });

// READ - Obter um produto pelo ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM Produto WHERE id = ?', [id], (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else if (results.length === 0) {
        res.status(404).send('Produto não encontrado');
      } else {
        res.json(results[0]);
      }
    });
  });

  // UPDATE - Atualizar um produto pelo ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    const query = 'UPDATE Produto SET nome = ?, descricao = ?, preco = ?, data_criacao = CURRENT_TIMESTAMP WHERE id = ?';
    connection.query(query, [nome, descricao, preco, id], (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else if (results.affectedRows === 0) {
        res.status(404).send('Produto não encontrado');
      } else {
        res.send('Produto atualizado com sucesso');
      }
    });
  });

  // DELETE - Remover um produto pelo ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM Produto WHERE id = ?', [id], (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else if (results.affectedRows === 0) {
        res.status(404).send('Produto não encontrado');
      } else {
        res.send('Produto removido com sucesso');
      }
    });
  });

module.exports = router;
