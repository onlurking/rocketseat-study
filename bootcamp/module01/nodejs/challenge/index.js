const express = require('express');

const server = express();

server.use(express.json());

const projects = [];
let countRequests = 0;

server.use((req, res, next) => {
  countRequests += 1;

  // eslint-disable-next-line no-console
  console.log(`${countRequests} requests made.`);

  return next();
});

function findProject(id) {
  const currentProject = projects.find(project => project.id === id);
  return currentProject;
}

function projectExists(req, res, next) {
  const { id } = req.params;
  const currentProject = findProject(id);

  if (!currentProject) return res.status(400).json({ error: 'project does not exist' });

  return next();
}

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({
    id,
    title,
    tasks: []
  });

  return res.json(projects);
});

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const currentProject = findProject(id);
  currentProject.title = title;

  return res.json(currentProject);
});

server.delete('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;

  const index = findProject(id);
  projects.splice(index, 1);

  return res.json(projects);
});

server.post('/projects/:id/tasks', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const currentProject = findProject(id);
  currentProject.tasks.push(title);

  return res.json(currentProject);
});

server.listen(3000);
