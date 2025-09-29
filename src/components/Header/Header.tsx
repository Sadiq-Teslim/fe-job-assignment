/**
 * Header Component
 * Renders the top navigation bar with logo, hamburger menu, search, write button, and profile icon.
 * Responsive: Hamburger and search icon shown on mobile, full search and write shown on desktop.
 */
import React from 'react';
import {
    HeaderContainer, LeftSection, HamburgerMenu, LogoImage, 
    // SearchWrapper, SearchInput, 
    RightSection, SearchIconMobile, WriteLink, WriteText, ProfileIcon
} from './styles';
import { BsSearch } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import { FiMenu } from 'react-icons/fi'; // Import the hamburger icon

// Main header navigation bar
const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <LeftSection>
                {/* Hamburger menu for mobile navigation */}
                <HamburgerMenu>
                    <FiMenu size={24} />
                </HamburgerMenu>
                {/* Medium logo */}
                <LogoImage src="/medium-logo.png" alt="Medium Logo" />
            </LeftSection>

            <RightSection>
                {/* Mobile search icon */}
                <SearchIconMobile>
                    <BsSearch size={22} />
                </SearchIconMobile>

                {/* Write button (desktop only, hidden on mobile via CSS) */}
                <WriteLink href="#">
                    <GoPencil size={24} />
                    <WriteText>Write</WriteText>
                </WriteLink>

                {/* User profile icon */}
                <ProfileIcon />
            </RightSection>
        </HeaderContainer>
    );
};

export default Header;