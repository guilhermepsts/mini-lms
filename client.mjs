const base = 'http://localhost:3000';

setTimeout(async () => {
	// ---  Cursos  ---
	//POST
	// await fetch(base + '/cursos', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({
	// 		slug: 'typescript',
	// 		nome: 'Typescript',
	// 		descricao: 'Curso de Typescript',
	// 	}),
	// });
	//GET all
	// await fetch(base + '/cursos');
	//GET specify
	// await fetch(base + '/cursos/javascript');
	//PUT
	// await fetch(base + '/curso/html', {
	// 	method: 'PUT',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({
	// 		slug: 'html',
	// 		nome: 'HTML Atualizado 2026',
	// 		descricao: 'Curso de HTML 2026',
	// 	}),
	// DELETE;
	// await fetch(base + '/cursos/javascript', {
	// 	method: 'DELETE',
	// });
	//  ---  Aulas  ---
	//POST
	// await fetch(base + '/cursos/javascript/aulas', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({
	// 		slug: 'variaveis2',
	// 		nome: 'Variaveis 2',
	// 	}),
	// });
	//GET all
	// await fetch(base + '/cursos/javascript/aulas');
	//GET specify
	//await fetch(base + '/cursos/javascript/aulas/variaveis3');
	//PUT
	// await fetch(base + '/cursos/javascript/aulas/variaveis', {
	// 	method: 'PUT',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({
	// 		nome: 'Variáveis em JavaScript',
	// 	}),
	// });
	//DELETE specify
	// await fetch(base + '/cursos/javascript/aulas/variaveis', {
	// 	method: 'DELETE',
	// });
	//DELETE all
	// await fetch(base + '/cursos/javascript/aulas', {
	// 	method: 'DELETE',
	// });
}, 200);

// await fetch(base + '/aulas', {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify({
// 		slug: 'arrays',
// 		nome: 'Arrays',
// 		cursoSlug: 'javascript',
// 	}),
// });

// // const curso = await fetch(base + '/curso?slug=javascript').then((r) =>
// // 	r.json(),
// // );
// // console.log(curso);

// // const cursos = await fetch(base + '/cursos').then((r) => r.json());
// // console.log(cursos);

// // const aulas = await fetch(base + '/aulas?curso=javascript').then((r) =>
// // 	r.json(),
// // );
// // console.log(aulas);

// const aula = await fetch(base + '/aula?curso=javascript&slug=arrays').then(
// 	(r) => r.json(),
// );
// console.log(aula);
