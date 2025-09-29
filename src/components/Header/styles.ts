/**
 * Header Styles
 * Contains styled-components for the header layout, logo, hamburger menu, search, and profile.
 * Responsive design: adjusts padding and visibility for mobile/desktop.
 */
import styled from 'styled-components';

// Main header container, sticky at top
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem; // Mobile padding
  border-bottom: 1px solid #F2F2F2;
  height: 57px;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  z-index: 100;

  @media (min-width: 1024px) {
    padding: 0 1.5rem; // Desktop padding
  }
`;

// Left section: logo and hamburger menu
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Hamburger menu for mobile navigation
export const HamburgerMenu = styled.div`
  cursor: pointer;
  color: #242424;

  @media (min-width: 1024px) {
    display: none; // Hide on desktop
  }
`;

// Medium logo image
export const LogoImage = styled.img`
  height: 25px;
  display: block;
  cursor: pointer;
`;

// Search input wrapper, hidden on mobile
export const SearchWrapper = styled.div`
  display: none; // Hidden on mobile by default

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    background-color: #FAFAFA;
    border-radius: 99px;
    padding: 0.5rem 1rem;
    color: #6B6B6B;
    gap: 0.5rem;
    
    &:focus-within {
        background-color: #FFFFFF;
        border: 1px solid #242424;
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    color: #6B6B6B;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const SearchIconMobile = styled.div`
  cursor: pointer;
  color: #6B6B6B;

  @media (min-width: 768px) {
    display: none;
  }
`;

// WriteLink is now completely hidden on mobile
export const WriteLink = styled.a`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6B6B6B;
    cursor: pointer;
    font-size: 0.9rem;
  
    &:hover {
      color: #242424;
    }
  }
`;

export const WriteText = styled.span`
  line-height: 1;
`;

export const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #242424;
  border-radius: 50%;
  cursor: pointer;
`;