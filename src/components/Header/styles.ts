// src/components/Header/styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid #F2F2F2;
  height: 57px;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// THIS IS THE MODIFIED COMPONENT
export const LogoImage = styled.img`
  height: 25px; /* Matches the height of the original Medium logo */
  display: block;
  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  display: none; // Hidden on mobile

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
  font-family: 'Roboto', sans-serif; /* Use the project font */

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

export const WriteLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B6B6B;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    color: #242424;
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