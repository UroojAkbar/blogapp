// import { useParams } from 'react-router-dom';
// import articles from './article-content';

// const ArticlePage = () => {
//     const { articleId } = useParams();
//     const article = articles.find(article => article.name === articleId);

//     return (
//         <>
//         <h1>{article.title}</h1>
//         {article.content.map(paragraph => (
//             <p>{paragraph}</p>
//         ))}
//         </>
//     );
// }

// export default ArticlePage;



import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
        <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center my-8">{article.title}</h1>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {article.content.map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default ArticlePage;
