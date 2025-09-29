// src/components/ArticleCard/styles.ts
import styled from 'styled-components';

export const CardContainer = styled.div`
    padding: 1rem 0;
`;

export const ClappedByInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6B6B6B;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`;

export const AuthorAvatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 4px;
`;

export const AuthorName = styled.span`
    color: #242424;
`;

export const Publication = styled.span`
    color: #6B6B6B;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;

export const TextContent = styled.div`
    flex: 1;
`;

export const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.25rem;
    letter-spacing: -0.01em;
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    color: #6B6B6B;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ArticleImage = styled.img`
    width: 112px;
    height: 112px;
    object-fit: cover;
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