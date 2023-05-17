import React, { useEffect, useState } from 'react';
import './main.global.css'
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import thunk from  'redux-thunk';
import { PostContextProvider } from './shared/context/postContext';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import {  RecoilRoot, atom} from 'recoil';



import { Provider} from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import { RootReduser } from './store/store';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Post } from './shared/Post';
// import { NoPost } from './shared/CardsList/NoPost';
import { NotFound } from './shared/NotFound/NotFound';



const store = createStore(RootReduser, composeWithDevTools(
  applyMiddleware(thunk)
))

export const textComment = atom({
  key: 'textState', 
  default: 'Привет из рекойл',
});


function AppComponent() {
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  useToken() 


  return ( 
    <>
      {mounted && 
        (
        <BrowserRouter>  
          <PostContextProvider>
            <Layout>
              <Header/>
              <Content>
                <Switch>
                  <Redirect exact from="/auth" to="/posts" />
                  <Redirect exact from="/" to="/posts" />

                  <Route exact strict path="/posts/:id">
                    <Post />
                    <CardsList/>
                  </Route>

                  <Route exact path="/posts">
                    <CardsList/>
                  </Route>

                  <Route component={NotFound} />
                </Switch>
              </Content>
            </Layout>
          </PostContextProvider>
        </BrowserRouter>
        )
      }
    </>

    
   );
}

export const App = hot(()=> (
  <RecoilRoot>
    <Provider store={store}>
      <AppComponent/>
    </Provider>
  </RecoilRoot>
));



