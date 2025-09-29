import React from 'react';
import {
    SidebarContainer,
    Section,
    SectionTitle,
    StaffPickItem,
    StaffPickAuthor,
    AuthorAvatar,
    StaffPickTitle,
    SeeMoreLink,
    TopicPills,
    Pill,
    UserToFollowItem,
    UserInfo,
    UserAvatar,
    UserDetails,
    UserName,
    UserBio,
    FollowButton,
    FooterLinks
} from './styles';
import { staffPicks, topics, usersToFollow } from '../../data/mockData';
import { BsBookmark } from 'react-icons/bs'; // Import the specific icon needed

const Sidebar: React.FC = () => {
    const footerLinks = ['Help', 'Status', 'About', 'Careers', 'Press', 'Blog', 'Privacy', 'Terms', 'Text to speech'];

    return (
        <SidebarContainer>
            <Section>
                <SectionTitle>Staff Picks</SectionTitle>
                {staffPicks.map(pick => (
                    <StaffPickItem key={pick.id}>
                        <StaffPickAuthor>
                            <AuthorAvatar src={pick.author.avatarUrl} alt={pick.author.name} />
                            <span>{pick.author.name}</span>
                        </StaffPickAuthor>
                        <StaffPickTitle>{pick.title}</StaffPickTitle>
                    </StaffPickItem>
                ))}
                <SeeMoreLink>See the full list</SeeMoreLink>
            </Section>

            <Section>
                <SectionTitle>Recommended topics</SectionTitle>
                <TopicPills>
                    {topics.map(topic => <Pill key={topic}>{topic}</Pill>)}
                </TopicPills>
                <SeeMoreLink>See more topics</SeeMoreLink>
            </Section>

            <Section>
                <SectionTitle>Who to follow</SectionTitle>
                {usersToFollow.map(user => (
                    <UserToFollowItem key={user.id}>
                        <UserInfo>
                            <UserAvatar src={user.avatarUrl} alt={user.name} />
                            <UserDetails>
                                <UserName>{user.name}</UserName>
                                <UserBio>{user.bio}</UserBio>
                            </UserDetails>
                        </UserInfo>
                        <FollowButton>Follow</FollowButton>
                    </UserToFollowItem>
                ))}
                 <SeeMoreLink>See more suggestions</SeeMoreLink>
            </Section>
            
            <Section>
                <SectionTitle>Reading list</SectionTitle>
                <p style={{fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.4}}>
                    Click the <BsBookmark style={{verticalAlign: 'middle', margin: '0 3px', display: 'inline-block'}} /> on any story to easily add it to your reading list or a custom list that you can share.
                </p>
            </Section>

            <FooterLinks>
                {footerLinks.map(link => <a href="#" key={link}>{link}</a>)}
            </FooterLinks>
        </SidebarContainer>
    );
};

export default Sidebar;