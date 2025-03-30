const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/User'); // Importa o modelo de usuário

const router = express.Router();

// =================== Criar Usuário (POST) ===================
router.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Verifica se o e-mail já está cadastrado
        const usuarioExiste = await Usuario.findOne({ email });
        if (usuarioExiste) {
            return res.status(400).json({ error: "E-mail já cadastrado!" });
        }

        // Hash da senha antes de salvar
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        const novoUsuario = new Usuario({ nome, email, senha: senhaHash });
        await novoUsuario.save();

        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário!" });
    }
});

// =================== Listar Usuários (GET) ===================
router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find().select('-senha'); // Oculta a senha
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar usuários!" });
    }
});

// =================== Atualizar Usuário (PUT) ===================
router.put('/usuarios/:id', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Se a senha foi alterada, faz o hash novamente
        let senhaHash = null;
        if (senha) {
            const salt = await bcrypt.genSalt(10);
            senhaHash = await bcrypt.hash(senha, salt);
        }

        const usuarioAtualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            { nome, email, senha: senhaHash },
            { new: true }
        ).select('-senha'); // Oculta a senha na resposta

        if (!usuarioAtualizado) {
            return res.status(404).json({ error: "Usuário não encontrado!" });
        }

        res.json(usuarioAtualizado);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar usuário!" });
    }
});

// =================== Deletar Usuário (DELETE) ===================
router.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuarioRemovido = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioRemovido) {
            return res.status(404).json({ error: "Usuário não encontrado!" });
        }
        res.json({ message: "Usuário removido com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar usuário!" });
    }
});

// =================== Login (POST) ===================
router.post('/login', async (req, res) => {
    try {
        const { email, senha } = req.body;

        // Verifica se o usuário existe
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ error: "E-mail ou senha inválidos!" });
        }

        // Compara a senha informada com o hash salvo no banco
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(400).json({ error: "E-mail ou senha inválidos!" });
        }

        // Gera um token JWT
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email } });
    } catch (error) {
        res.status(500).json({ error: "Erro ao fazer login!" });
    }
});

module.exports = router;
