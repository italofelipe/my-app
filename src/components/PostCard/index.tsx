import React from 'react';
import './styles.css';
import { PostCardData } from '../../@types/PostCard';


export const PostCard = (data: PostCardData) => (
    <div className="post">
        <img src={data.coverImage} alt={data.canonicalTitle} />
        <div className="post-content">
            <h2>
                {data.canonicalTitle} {data.id}
            </h2>
            <p>{data.body}</p>
        </div>
    </div>
);


