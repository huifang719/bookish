import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import "./App.css"
import NavigationBar from './components/NavigationBar';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar />
            </header>
            
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            
        </div>
    );
}

export default App;

