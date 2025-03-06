import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Career Fields Context
export const CareerContext = createContext({
    careerResults: null,
    updateCareerResults: () => {},
    resetCareerResults: () => {}
});

// Career Fields Provider
export const CareerProvider = ({ children }) => {
    const [careerResults, setCareerResults] = useState(null);

    const updateCareerResults = (results) => {
        setCareerResults(results);
        localStorage.setItem('careerExplorationResults', JSON.stringify(results));
    };

    const resetCareerResults = () => {
        setCareerResults(null);
        localStorage.removeItem('careerExplorationResults');
    };

    return (
        <CareerContext.Provider value={{ 
            careerResults, 
            updateCareerResults, 
            resetCareerResults 
        }}>
            {children}
        </CareerContext.Provider>
    );
};

// Custom hook for using Career Context
export const useCareerContext = () => useContext(CareerContext);