export const requestProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const requestProject = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);

export const createProject = (project) => {
    return $.ajax({
    method: 'POST',
    url: 'api/projects',
    data: { project }
  })
};

export const createBacking = (backing) => {
  return $.ajax({
    method: 'POST',
    url: '/api/backings',
    data: { backing }
  })
};

export const deleteBacking = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/backings/${id}`
  })
};

export const createLike = (project_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like : {
      project_id
    } }
  })
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  })
};

export const recommendedprojects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/recommended'
  })
}
