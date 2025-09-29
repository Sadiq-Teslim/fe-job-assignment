// src/App.tsx
import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { articles } from "./data/mockData";
import { FiArrowUpRight } from "react-icons/fi";

// New component for the top banner
const TopBanner = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: #f2f2f2;
  color: #6b6b6b;
  font-size: 0.8rem;
  padding: 0.5rem;
  text-decoration: none;

  @media (min-width: 1024px) {
    display: none; // Hide on desktop
  }
`;

const AppContainer = styled.div``;

const MainLayout = styled.div`
  width: 100%;
  max-width: 1192px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem; // Mobile padding

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 352px;
    gap: 4rem;
    padding: 0 1.5rem; // Desktop padding
  }
`;

const MainContentFeed = styled.main``;

const FeedTabs = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 1rem;
  position: sticky;
  top: 57px;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  z-index: 50;
`;

const Tab = styled.a<{ $active?: boolean }>`
  padding: 1rem 0;
  font-size: 0.9rem;
  color: ${({ $active }) => ($active ? "#242424" : "#6B6B6B")};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};
  border-bottom: ${({ $active }) =>
    $active ? "1px solid #242424" : "1px solid transparent"};
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    color: #242424;
  }
`;

const ArticlesList = styled.div`
  border-top: 1px solid #f2f2f2;
`;

function App() {
  return (
    <AppContainer>
      <TopBanner href="#">
        <span>Open in app</span>
        <FiArrowUpRight />
      </TopBanner>
      <Header />
      <MainLayout>
        <MainContentFeed>
          <FeedTabs>
            <Tab $active>For you</Tab>
            <Tab>Featured</Tab>
          </FeedTabs>
          <ArticlesList>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </ArticlesList>
        </MainContentFeed>
        <Sidebar />
      </MainLayout>
    </AppContainer>
  );
}

export default App;
