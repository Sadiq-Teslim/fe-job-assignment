// src/components/Sidebar/styles.ts
import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
    padding-top: 1rem;
    position: sticky;
    top: 57px; /* Height of header */
    height: calc(100vh - 57px);
    overflow-y: auto;
  }
`;

export const Section = styled.section`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const StaffPickItem = styled.div`
    margin-bottom: 1.5rem;
`;

export const StaffPickAuthor = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

export const AuthorAvatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const StaffPickTitle = styled.h4`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25;
`;

export const SeeMoreLink = styled.a`
    font-size: 0.875rem;
    color: #1A8917; /* Medium's green */
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
`;

export const TopicPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Pill = styled.button`
  background-color: #F2F2F2;
  border: none;
  border-radius: 100px;
  padding: 0.6rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    background-color: #E6E6E6;
  }
`;

export const UserToFollowItem = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

export const UserInfo = styled.div`
    display: flex;
    gap: 1rem;
`;

export const UserAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserDetails = styled.div``;

export const UserName = styled.h4`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
`;

export const UserBio = styled.p`
    font-size: 0.875rem;
    color: #6B6B6B;
    line-height: 1.4;
`;

export const FollowButton = styled.button`
    border: 1px solid #242424;
    background: transparent;
    color: #242424;
    border-radius: 99px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    align-self: center;
    font-size: 0.875rem;
    font-family: 'Sohne', sans-serif;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.8rem;
  color: #6B6B6B;
  line-height: 1.5;
`;