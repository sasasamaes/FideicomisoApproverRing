import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';


describe('Header Component', () => {
  it('renders header with title and navigation', () => {
    render(<Header />);
    
    // Use semantic queries and test accessibility
    const header = screen.getByRole('banner');
    const headerTitle = screen.getByRole('heading', { name: 'My Website' });
    expect(header).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    
    // Test navigation elements
    const nav = screen.getByRole('navigation');
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    
    expect(nav).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('handles navigation interactions correctly', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('meets accessibility requirements', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main');
  });
});
