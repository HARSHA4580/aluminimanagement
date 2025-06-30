import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const initialResources = [
  { id: 1, title: 'Python Basics', url: 'https://www.python.org/doc/', description: 'Official Python documentation.', type: 'Website' },
  { id: 2, title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html', description: 'Official React documentation.', type: 'Website' },
  { id: 3, title: 'JavaScript Info', url: 'https://javascript.info/', description: 'Comprehensive JavaScript guide.', type: 'Website' },
];

function ResourcesMaterials() {
  const [resources, setResources] = useState(initialResources);
  const [newResource, setNewResource] = useState({ title: '', url: '', description: '', type: '' });
  const [editMode, setEditMode] = useState(null);

  const handleAddResource = () => {
    if (newResource.title && newResource.url) {
      setResources([...resources, { id: Date.now(), ...newResource }]);
      setNewResource({ title: '', url: '', description: '', type: '' });
    }
  };

  const handleEditResource = (id) => {
    const resourceToEdit = resources.find(resource => resource.id === id);
    setNewResource(resourceToEdit);
    setEditMode(id);
  };

  const handleUpdateResource = () => {
    setResources(resources.map(resource =>
      resource.id === editMode
        ? { ...newResource, id: editMode }
        : resource
    ));
    setNewResource({ title: '', url: '', description: '', type: '' });
    setEditMode(null);
  };

  const handleDeleteResource = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  return (
    <Container sx={{ py: 4 }} maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Resources & Materials
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {editMode ? 'Edit Resource' : 'Add New Resource'}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={newResource.title}
              onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="URL"
              variant="outlined"
              fullWidth
              value={newResource.url}
              onChange={(e) => setNewResource({ ...newResource, url: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={newResource.description}
              onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Type (e.g., Website, Book, Course)"
              variant="outlined"
              fullWidth
              value={newResource.type}
              onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            {editMode ? (
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleUpdateResource}
              >
                Update Resource
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddResource}
              >
                Add Resource
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" component="h2" gutterBottom>
        Existing Resources
      </Typography>
      <List>
        {resources.map((resource) => (
          <ListItem key={resource.id}>
            <ListItemText
              primary={<a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>}
              secondary={`${resource.description} (${resource.type})`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditResource(resource.id)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteResource(resource.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ResourcesMaterials;
