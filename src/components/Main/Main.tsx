import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';

import MainStyle from "./index.module.less";
import RouterLoading from "../Router-loading";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Home = lazy(() => import(/* webpackPrefetch:true */ "../../views/Home/Home"));
const About = lazy(() => import(/* webpackPrefetch:true */ "../../views/About/About"));
const Articles = lazy(() => import(/* webpackPrefetch:true */ "../../views/Articles/Articles"));
const Msg = lazy(() => import(/* webpackPrefetch:true */ "../../views/Msg/Msg"));
const Photo = lazy(() => import(/* webpackPrefetch:true */ "../../views/Photo/Photo"));
const Saying = lazy(() => import(/* webpackPrefetch:true */ "../../views/Saying/Saying"));
const Show = lazy(() => import(/* webpackPrefetch:true */ "../../views/Show/Show"));
const Post = lazy(() => import(/* webpackPrefetch:true */ "../../views/Post/Post"));
const Main: React.FC = () => {
  return (
    <>
      <main>
        <ErrorBoundary>
          <Suspense fallback={<RouterLoading></RouterLoading>}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/articles" element={<Articles />}></Route>
              <Route path="/msg" element={<Msg />}></Route>
              <Route path="/photo" element={<Photo />}></Route>
              <Route path="/saying" element={<Saying />}></Route>
              <Route path="/show" element={<Show />}></Route>
              <Route path="/post" element={<Post />}></Route>
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}
export default Main;