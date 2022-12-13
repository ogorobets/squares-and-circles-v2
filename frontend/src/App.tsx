import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShapes } from 'redux/actions/shapes';
import Loader from 'components/loader/Loader';
import { Loading } from 'constants/constants';
import { AppContainer, AppTitle, ErrorWrapper } from 'components/app/Styles';
import ShapesContainer from 'components/app/ShapesContainer';
import TopMenu from 'components/top-menu';
import { RootState } from 'redux/reducers';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.shapes.loading);

  useEffect(() => {
    dispatch(getShapes());
  }, [dispatch]);

  return (
    <AppContainer>
      <AppTitle>Круги и квадраты, v.1.0</AppTitle>
      <TopMenu />
      {loading === Loading.INITIAL || loading === Loading.PENDING ? (
        <Loader />
      ) : loading === Loading.ERROR ? (
        <ErrorWrapper>
          Sorry! An error occured while trying to fetch shapes data
        </ErrorWrapper>
      ) : (
        <ShapesContainer />
      )}
    </AppContainer>
  );
}

export default App;
