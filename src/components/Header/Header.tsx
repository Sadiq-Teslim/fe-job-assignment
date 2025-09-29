// src/components/Header/Header.tsx
import React from 'react';
import {
    HeaderContainer,
    LeftSection,
    LogoImage, // Import LogoImage instead of Logo
    SearchWrapper,
    SearchInput,
    RightSection,
    SearchIconMobile,
    WriteLink,
    WriteText,
    ProfileIcon
} from './styles';
import { BsSearch } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <LeftSection>
                {/* 
                  The path '/medium-logo.png' works because Vite serves 
                  everything from the 'public' folder at the root level.
                */}
                <LogoImage src="/medium-logo.png" alt="Medium Logo" />
                
                <SearchWrapper>
                    <BsSearch size={16} />
                    <SearchInput type="text" placeholder="Search" />
                </SearchWrapper>
            </LeftSection>

            <RightSection>
                <SearchIconMobile>
                    <BsSearch size={22} />
                </SearchIconMobile>

                <WriteLink href="#">
                    <GoPencil size={24} />
                    <WriteText>Write</WriteText>
                </WriteLink>

                <ProfileIcon />
            </RightSection>
        </HeaderContainer>
    );
};

export default Header;