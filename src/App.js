import './App.css';
import { Navbar} from './components/Header';
import { Menu } from './components/Menu';
import { ContainerSections } from './components/Sections';
import { Sidebar } from './components/Sidebar';

const topics = [
  { name: 'Topic 1', link: '#link'},
  { name: 'Topic 2', link: '#link'},
  { name: 'Topic 3', link: '#link'},
  { name: 'Topic 4', link: '#link'},
]

const sections = [
  { name: 'Section 1', link: '#link'},
  { name: 'Section 2', link: '#link'},
  { name: 'Section 3', link: '#link'},
  { name: 'Section 4', link: '#link'},
]

const textSections = [
  { title: 'Section 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis blandit venenatis. Duis egestas porttitor neque, pharetra gravida orci convallis eget. Vestibulum ultricies sollicitudin interdum. Mauris enim ipsum, aliquet vitae arcu eget, tristique scelerisque neque. Phasellus sodales fermentum tortor.' },
  { title: 'Section 2',
    text: 'Nulla facilisi. Fusce quis pharetra magna, quis dictum ex. Sed nulla quam, facilisis eget euismod id, volutpat et metus. Praesent eu ex quis urna bibendum molestie. Praesent cursus elit a nisi tincidunt cursus.' },
  { title: 'Section 3',
    text: 'Donec lacus purus, malesuada ac mollis vel, varius eu erat. Mauris iaculis, nisi et euismod pretium, ligula turpis mollis quam, nec bibendum ex nisi sit amet nisl. Ut sit amet auctor nunc. Aenean eget ipsum nunc. Pellentesque tincidunt in felis eu sagittis. Etiam mi metus, porta eu facilisis a, rhoncus et mi. Mauris non purus ipsum.' },
];

const sidebarSections = [
  { name: 'Section 1', link: '#link'},
  { name: 'Section 2', link: '#link'},
  { name: 'Section 3', link: '#link'},
  { name: 'Section 4', link: '#link'},
  { name: 'Section 5', link: '#link'},
  { name: 'Section 6', link: '#link'},
  { name: 'Section 7', link: '#link'},
  { name: 'Section 8', link: '#link'},
  { name: 'Section 9', link: '#link'},
  { name: 'Section 10', link: '#link'},
  { name: 'Section 11', link: '#link'},
  { name: 'Section 12', link: '#link'},
  { name: 'Section 13', link: '#link'},
  { name: 'Section 14', link: '#link'},
  { name: 'Section 15', link: '#link'},
];

function App() {
  return (
    <div className="page">
      <Navbar menu = { topics } />
      <Menu sections = { sections } />
      <ContainerSections textSections = { textSections } />
      <Sidebar menu = { sidebarSections } />
    </div>
  );
}

export default App;
