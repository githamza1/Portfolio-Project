import React, { useState } from 'react';

const DataEntry = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    profilePic: '', // ✅ Added profilePic field
    aboutMe: '',
    skills: '',
    interests: '',
    projects: [],
    socialLinks: [],
  });

  const [socialLink, setSocialLink] = useState({ name: '', url: '' });
  const [project, setProject] = useState({ title: '', description: '', image: '', github: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (e) => {
    setSocialLink({ ...socialLink, [e.target.name]: e.target.value });
  };

  const addSocial = () => {
    if (socialLink.name && socialLink.url) {
      setFormData({ ...formData, socialLinks: [...formData.socialLinks, socialLink] });
      setSocialLink({ name: '', url: '' });
    }
  };

  const handleProjectChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    if (project.title) {
      setFormData({ ...formData, projects: [...formData.projects, project] });
      setProject({ title: '', description: '', image: '', github: '' });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="data-entry">
      <h2>Enter Portfolio Details</h2>

      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange} />

      <input type="text" name="profilePic" placeholder="Profile Picture URL" value={formData.profilePic} onChange={handleChange} />

      <textarea name="aboutMe" placeholder="About Me" value={formData.aboutMe} onChange={handleChange}></textarea>

      <input type="text" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} />
      <input type="text" name="interests" placeholder="Interests (comma separated)" value={formData.interests} onChange={handleChange} />

      <hr />
      <h3>Add Project</h3>
      <input type="text" name="title" placeholder="Project Title" value={project.title} onChange={handleProjectChange} />
      <input type="text" name="description" placeholder="Description" value={project.description} onChange={handleProjectChange} />
      <input type="text" name="image" placeholder="Image URL" value={project.image} onChange={handleProjectChange} />
      <input type="text" name="github" placeholder="GitHub Link" value={project.github} onChange={handleProjectChange} />
      <button onClick={addProject}>Add Project</button>

      <hr />
      <h3>Add Social Media</h3>
      <input type="text" name="name" placeholder="Platform" value={socialLink.name} onChange={handleSocialChange} />
      <input type="text" name="url" placeholder="URL" value={socialLink.url} onChange={handleSocialChange} />
      <button onClick={addSocial}>Add Social Link</button>

      <hr />
      <button onClick={submitData}>Generate Portfolio</button>
    </div>
  );
};

export default DataEntry;
