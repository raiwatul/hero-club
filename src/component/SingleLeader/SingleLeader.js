import React from 'react';

const SingleLeader = (props) => {
    const { data } = props;
    return (
        <div>
            <div class="d-flex my-3 bg-light">
                <img src={data.img} class="imgClass p-2 rounded-circle" style={{ height: '100px', width: '100px' }} alt="..." />
                <div>
                    <h5 class="card-title">{data.name}</h5>
                </div>

            </div>
        </div>
    );
};

export default SingleLeader;