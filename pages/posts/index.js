import Head from 'next/head';
import Link from 'next/link';

function Posts({ posts }) {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    };
}

export default Posts;
