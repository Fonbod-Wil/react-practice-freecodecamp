import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/contact.jsx';
import GitHub from './components/GitHub/github.jsx';
import User from './components/User/User.jsx';
import './index.css';
import { githubInfoLoader } from './components/GitHubInforLoader/GitHubIforLoader.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<GitHub />} loader={githubInfoLoader}/>

      {/* Parent route */}
      <Route path="user" element={<User />}>
        {/* Child route */}
        <Route path=":userid" element={<User />} />
      </Route>
       <Route path='*' element={<div>NOT FOUND</div>}></Route>

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
