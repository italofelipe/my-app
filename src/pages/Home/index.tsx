import { useCallback, useEffect, useState } from "react";

import "./styles.css";

import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { getAllAnime } from "../../service/v1/anime";
import { PostCard } from "../../components/PostCard";
import { PostCardData } from "../../@types/PostCard";

export const Home = () => {
    const [posts, setPosts] = useState<PostCardData[]>([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(10);
    const [searchValue, setSearchValue] = useState("");

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const data = await getAllAnime();

        setPosts(data.slice(page, postsPerPage));
        setAllPosts(data);
    }, []);

    useEffect(() => {
        handleLoadPosts(0, postsPerPage);
    }, [handleLoadPosts, postsPerPage]);

    const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        setPosts(posts);
        setPage(nextPage);
    };

    const handleChange = (e: { target: { value: any } }) => {
        const { value } = e.target;
        setSearchValue(value);
    };

    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = searchValue
        ? allPosts.filter((post) => {
              return post.titles
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
          })
        : posts;

    return (
        <section className="container">
            <h1 className="body-title">Animes mais populares</h1>
            <div className="search-container">
                {" "}
                <TextInput
                    searchValue={searchValue}
                    handleChange={handleChange}
                />
            </div>

            {filteredPosts.length > 0 &&  <div>
            {
                posts.map(anime => (
                    <PostCard data={anime} />
                ))
            }
                </div>}

            {filteredPosts.length === 0 && <p>Tente novamente =(</p>}

            <div className="button-container">
                {!searchValue && (
                    <Button
                        text="Load more posts"
                        onClick={loadMorePosts}
                        disabled={noMorePosts}
                    />
                )}
            </div>
        </section>
    );
};
