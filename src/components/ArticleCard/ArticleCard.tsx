// src/components/ArticleCard/ArticleCard.tsx
import React from 'react';
import type { Article } from '../../data/mockData';
import {
    CardContainer, ClappedByInfo, AuthorInfo, AuthorAvatar, AuthorName, Publication,
    ContentWrapper, TextContent, Title, Subtitle, ArticleImage,
    MetaInfo, Stats, Actions
} from './styles';
import { BsBookmark, BsChatText, BsThreeDots } from 'react-icons/bs';
import { BiMinusCircle } from 'react-icons/bi';
import { FaHandsClapping } from "react-icons/fa6"; // Clapping icon
import { GoStarFill } from "react-icons/go"; // The yellow star

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    const { author, publication, title, subtitle, date, claps, comments, imageUrl, clappedBy } = article;

    return (
        <CardContainer>
            {clappedBy && (
                <ClappedByInfo>
                    <FaHandsClapping size={14} />
                    <span>{clappedBy} clapped</span>
                </ClappedByInfo>
            )}
            <AuthorInfo>
                <AuthorAvatar src={author.avatarUrl} alt={author.name} />
                <AuthorName>{author.name}</AuthorName>
                <Publication>{publication}</Publication>
            </AuthorInfo>
            <ContentWrapper>
                <TextContent>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </TextContent>
                <ArticleImage src={imageUrl} alt={`Image for ${title}`} />
            </ContentWrapper>
            <MetaInfo>
                <Stats>
                    <GoStarFill size={14} color="#FFC017" />
                    <span>{date}</span>
                    <span><FaHandsClapping size={14} /> {claps}</span>
                    <span><BsChatText size={14} /> {comments}</span>
                </Stats>
                <Actions>
                    <BiMinusCircle size={20} />
                    <BsBookmark size={18} />
                    <BsThreeDots size={20} />
                </Actions>
            </MetaInfo>
        </CardContainer>
    );
};

export default ArticleCard;