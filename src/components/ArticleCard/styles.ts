/**
 * ArticleCard Styles
 * Contains styled-components for the article card layout, author info, content, stats, and actions.
 * Responsive design for mobile and desktop.
 */
import styled from 'styled-components';

// Main card container
export const CardContainer = styled.div`
    padding: 1rem 0;
`;

// Clapped by info section
export const ClappedByInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B6B6B;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

// Author info row
export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`;

// Author avatar image
export const AuthorAvatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 4px;
`;

// Author name text
export const AuthorName = styled.span`
    color: #242424;
`;

// Publication name text
export const Publication = styled.span`
    color: #6B6B6B;
`;

// Wrapper for main content and image
export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem; // Smaller gap for mobile
`;

// Text content (title, subtitle)
export const TextContent = styled.div`
    flex: 1;
`;

// Article title
export const Title = styled.h2`
    font-size: 1.1rem; // Slightly smaller for mobile
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.25rem;
    letter-spacing: -0.01em;

    @media (min-width: 768px) {
        font-size: 1.25rem; // Larger for desktop
    }
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    color: #6B6B6B;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2; // Show 2 lines
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ArticleImage = styled.img`
    width: 80px;   // Mobile image size
    height: 56px;  // Mobile image size
    object-fit: cover;

    @media (min-width: 768px) {
        width: 112px;  // Desktop image size
        height: 112px; // Desktop image size
    }
`;

export const MetaInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #6B6B6B;
    margin-top: 1rem;
`;

export const Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    & > span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    svg {
        cursor: pointer;
    }
`;