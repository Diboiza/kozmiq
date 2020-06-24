import React from 'react';
import Card from './Card';

const cardList = ({ mixes }) => {

    return (
        <div>
            {
                mixes.map((user, i) => {
                    return <Card
                        key={i}
                        artwork_url={mixes[i].artwork_url}
                        title={mixes[i].title}
                        description={mixes[i].description}
                        stream_url={mixes[i].stream_url}
                        download_url={mixes[i].download_url} />
                })
            }
        </div>
    );
}

export default cardList;