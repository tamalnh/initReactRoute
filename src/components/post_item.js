import React from 'react';

const PostItem = ({match}) => {
    
        
        return(
            <div className="post-item">
                <h2>post item {match.params.id}</h2>
            </div>
        )
    
}

export default PostItem;