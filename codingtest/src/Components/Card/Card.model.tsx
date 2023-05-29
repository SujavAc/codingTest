export interface CardProps {
    articleTitle?: string;
    articleDescription?: string;
    articleImage?: string;
    articleLink?: ArticleLink;
    articleTag?: ArticleTag;
}

interface ArticleLink {
    url?: string
    openInNewTab?: boolean
}

interface ArticleTag {
    label?: string
    tag?: string
}