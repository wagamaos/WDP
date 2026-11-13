import { useMemo, useState } from 'react';
import Card from './components/Card';
import FilterBar from './components/FilterBar';
import NotificationList from './components/NotificationList';
import ProfileCard from './components/ProfileCard';
import ProjectList from './components/ProjectList';
import projects from './data/projects';
import './App.css';

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const technologies = useMemo(
    () => [...new Set(projects.flatMap((project) => project.techStack))].sort(),
    []
  );

  const filteredProjects = selectedTechnology === 'all'
    ? projects
    : projects.filter((project) => project.techStack.includes(selectedTechnology));

  return (
    <main className="page-shell">
      <header className="hero">
        <p className="eyebrow">Week 11 · React components &amp; props</p>
        <h1>Project Gallery</h1>
        <p className="hero__intro">
          Reusable cards, prop-driven content, and a live technology filter.
        </p>
        <ProfileCard
          name="Dr. Toshpulatov"
          role="Professor"
          email="muhiddin@gachon.ac.kr"
        />
      </header>

      <div className="practice-grid">
        <Card title="Lecture Topics">
          <ul className="topic-list">
            <li>Components</li>
            <li>Props</li>
          </ul>
        </Card>
        <Card title="Homework">
          <p>Build a portfolio gallery using reusable React components.</p>
        </Card>
        <Card title="Notifications">
          <NotificationList />
        </Card>
      </div>

      <section className="gallery" aria-labelledby="gallery-heading">
        <div className="gallery__heading">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 id="gallery-heading">Featured projects</h2>
          </div>
          <FilterBar
            technologies={technologies}
            selectedTechnology={selectedTechnology}
            onTechnologyChange={setSelectedTechnology}
          />
        </div>
        <ProjectList projects={filteredProjects} />
        <p className="result-count" aria-live="polite">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>
      </section>
    </main>
  );
}

export default App;
