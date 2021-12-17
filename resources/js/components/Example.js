import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PreLoader from './PreLoader';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Contact from './Contact';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import Nav from './Nav';
import PostPage from './PostPage';
import Login from './Login';
import SignUp from './SignUp';

function Example() {
    return (
        <BrowserRouter>
            <PreLoader></PreLoader>
            <Nav></Nav>
            <Routes>
            <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>

            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/contactus" element={<Contact></Contact>}></Route>
            <Route path="/blogPage" element={<BlogPage></BlogPage>}></Route>
            <Route path="/singlepost/:id" element={<PostPage></PostPage>}></Route>
            <Route path="/add" element={<PostPage></PostPage>}></Route>
            <Route path="/update" element={<PostPage></PostPage>}></Route>
            <Route path="/delete" element={<PostPage></PostPage>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
