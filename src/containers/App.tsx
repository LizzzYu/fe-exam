import React from 'react';
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Result from './Result/Result';
import Tags from './Tags/Tags';
import { RoutePaths } from '../constants/routes';

function App(): React.ReactElement {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to={RoutePaths.HOME} replace />} />
					<Route path={RoutePaths.HOME} element={<Home />} />
					<Route path={RoutePaths.RESULTS} element={<Result />} />
					<Route path={RoutePaths.TAGS} element={<Tags />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
