// import { Link } from 'react-router-dom';
// import articles from './article-content';

// const ArticlesListPage = () => {
//     return (
//         <>
//         <h1 className='text-center text-6xl m-10'>Articles</h1>
//         {articles.map(article => (
//             <Link key={article.name} className="text-center font-sans" to={`/articles/${article.name}`}>
//                 <h3 className='font-bold m-10 text-xl '>{article.title}</h3>
           
//                 <p className='text-lg'>{article.content[0].substring(0, 100)}...</p>
//                 <hr />
//             </Link>
//         ))}
//         </>
//     );
// }

// export default ArticlesListPage;



import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesListPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className='text-center text-6xl mt-10 mb-12 font-bold'>Articles</h1>
            <div className="grid gap-6">
                {articles.map(article => (
                    <Link key={article.name} className="block rounded-lg overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1" to={`/articles/${article.name}`}>
                        <div className="p-6">
                            <h3 className='text-xl font-semibold mb-4'>{article.title}</h3>
                            <p className='text-gray-700'>{article.content[0].substring(0, 100)}...</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ArticlesListPage;
