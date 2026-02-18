import { Core } from './core/core.ts';
import {
	atualizarCurso,
	criarCurso,
	deletarCurso,
	pegarCurso,
	pegarCursos,
	criarAula,
	pegarAula,
	pegarAulas,
	atualizarAula,
	deletarAula,
	deletarAulasDoCurso,
} from './core/database.ts';

const core = new Core();

//Cursos

core.router.post('/cursos', (req, res) => {
	const { slug, nome, descricao } = req.body;
	const criado = criarCurso({ slug, nome, descricao });

	if (criado && criado.changes > 0) {
		console.log(`Curso de ${nome} criado com sucesso.`);
		return res.status(201).json({ message: 'Curso criado' });
	}
	console.log(`Não foi possível criar Curso de ${nome}`);
	return res.status(409).json({ message: 'Curso já existe' });
});

core.router.get('/cursos', (req, res) => {
	const cursos = pegarCursos();
	if (cursos) {
		console.log(cursos);
		res.status(200).json(cursos);
	} else {
		res.status(404).json('Cursos não encontrados');
	}
});

core.router.get('/cursos/:slug', (req, res) => {
	const { slug } = req.params;
	const curso = pegarCurso(slug);
	if (curso) {
		console.log(curso);
		res.status(200).json(curso);
	} else {
		console.log('Curso não existe');
		res.status(404).json('Curso não encontrados');
	}
});

core.router.put('/cursos/:slug', (req, res) => {
	const { slug } = req.params;
	const { nome, descricao } = req.body;
	const atualizado = atualizarCurso({ slug, nome, descricao });
	if (!atualizado) {
		return res.status(500).json('Erro no banco');
	}
	if (atualizado.changes === 0) {
		return res.status(404).json('Curso não encontrado');
	}
	console.log(`Curso de ${slug} atualizado.`);
	return res.status(200).json('Curso atualizado');
});

core.router.delete('/cursos/:slug', (req, res) => {
	const { slug } = req.params;
	const deletado = deletarCurso(slug);
	if (!deletado) {
		console.log(`Curso não existe`);
		res.status(404).json('Curso não encontrado');
	} else {
		console.log(`Curso deletado`);
		res.status(200).json({ message: 'Curso deletado' });
	}
});

// Aulas

core.router.post('/cursos/:cursoSlug/aulas', (req, res) => {
	const { slug, nome } = req.body;
	const { cursoSlug } = req.params;

	const criada = criarAula({ slug, nome, cursoSlug });

	if (criada) {
		console.log('Aula criada.');
		res.status(201).json('aula criada');
	} else {
		console.log('Erro ao criar aula.');
		res.status(400).json('erro ao criar aula');
	}
});

core.router.get('/cursos/:cursoSlug/aulas', (req, res) => {
	const { cursoSlug } = req.params;
	const aulas = pegarAulas(cursoSlug);

	if (aulas && aulas.length) {
		console.log(aulas);
		res.status(201).json(aulas);
	} else {
		console.log('Não existem aulas neste curso!');

		res.status(404).json('Aulas não encontradas');
	}
});

core.router.get('/cursos/:cursoSlug/aulas/:aulaSlug', (req, res) => {
	const { cursoSlug, aulaSlug } = req.params;
	const aula = pegarAula(cursoSlug, aulaSlug);

	if (aula) {
		console.log(aula);
		res.status(201).json(aula);
	} else {
		console.log('Essa aula não existe neste curso.');

		res.status(404).json('Aula não encontrada');
	}
});

core.router.put('/cursos/:cursoSlug/aulas/:aulaSlug', (req, res) => {
	const { cursoSlug, aulaSlug } = req.params;
	const { nome } = req.body;

	if (!nome) {
		console.log('É necessário um nome para atualizar');
		return res.status(400).json({ error: 'Nome é obrigatório' });
	}
	const atualizada = atualizarAula({
		nome,
		cursoSlug,
		aulaSlug,
	});

	if (atualizada) {
		console.log('Aula atualizada!');
		return res.status(200).json({ message: 'Aula atualizada' });
	} else {
		console.log('Aula não encontrada');
		return res.status(404).json({ error: 'Aula não encontrada' });
	}
});

core.router.delete('/cursos/:cursoSlug/aulas/:aulaSlug', (req, res) => {
	const { cursoSlug, aulaSlug } = req.params;
	const deletada = deletarAula({ cursoSlug, aulaSlug });

	if (deletada) {
		console.log('Aula deletada!');
		return res.status(200).json({ message: 'Aula deletada' });
	} else {
		console.log('Aula não encontrada');
		return res.status(404).json({ error: 'Aula não encontrada' });
	}
});

core.router.delete('/cursos/:cursoSlug/aulas', (req, res) => {
	const { cursoSlug } = req.params;
	const deletadas = deletarAulasDoCurso({ cursoSlug });

	if (deletadas) {
		console.log('Aulas do curso deletadas.');
		return res.status(200).json({ message: 'Todas as aulas foram deletadas' });
	} else {
		console.log('Não existem aulas neste curso.');
		return res.status(404).json({ error: 'Nenhuma aula encontrada' });
	}
});

core.init();
