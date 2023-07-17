import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ContactsPage from './pages/Contacts';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}>
        </Route>
        <Route path='/projects' element={<ProjectsPage />}>
        </Route>
        <Route path='/contacts' element={<ContactsPage />}>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
