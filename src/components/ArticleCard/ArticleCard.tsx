/**
 * ArticleCard Component
 * Displays a single article card with author info, title, subtitle, image, stats, and actions.
 * Used in the main feed to show news articles in a professional format.
 */
import React from 'react';
import type { Article } from '../../data/mockData';
import {
    CardContainer, ClappedByInfo, AuthorInfo, AuthorAvatar, AuthorName, Publication,
    ContentWrapper, TextContent, Title, Subtitle, ArticleImage,
    MetaInfo, Stats, Actions
} from './styles';
import { BsBookmark, BsChatText, BsThreeDots } from 'react-icons/bs';
import { BiMinusCircle } from 'react-icons/bi';
import { FaHandsClapping } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";

// Props for ArticleCard: expects an Article object
interface ArticleCardProps {
    article: Article;
}

/**
 * Renders the article card UI, including clapped info, author, content, stats, and actions.
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    const { author, publication, title, subtitle, date, claps, comments, imageUrl, clappedBy } = article;

    return (
        <CardContainer>
            {/* Show who clapped if available */}
            {clappedBy && (
                <ClappedByInfo>
                    <FaHandsClapping size={14} />
                    <span>{clappedBy} clapped</span>
                </ClappedByInfo>
            )}
            {/* Author and publication info */}
            <AuthorInfo>
                <AuthorAvatar src={author.avatarUrl} alt={author.name} />
                <AuthorName>{author.name}</AuthorName>
                <Publication>{publication}</Publication>
            </AuthorInfo>
            {/* Main content: title, subtitle, image */}
            <ContentWrapper>
                <TextContent>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </TextContent>
                <ArticleImage src={imageUrl} alt={`Image for ${title}`} />
            </ContentWrapper>
            {/* Article meta info: date, claps, comments */}
            <MetaInfo>
                <Stats>
                    <GoStarFill size={14} color="#FFC017" />
                    <span>{date}</span>
                    <span><FaHandsClapping size={14} /> {claps}</span>
                    <span><BsChatText size={14} /> {comments}</span>
                </Stats>
                {/* Card actions: minus, bookmark, more */}
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