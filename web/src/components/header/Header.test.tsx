import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';


describe('Header Component', () => {
  it('renders header with title and navigation', () => {
    render(<Header />);
    
    // Check if header title exists
    const headerTitle = screen.getByText('My Website');
    expect(headerTitle).toBeInTheDocument();
    
    // Check if navigation buttons exist
    const homeButton = screen.getByText('Home');
    const aboutButton = screen.getByText('About');
    
    expect(homeButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
  });
});