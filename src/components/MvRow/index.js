import React from "react";
import { VscExtensions } from 'react-icons/vsc';

import './style.scss';
// https://upload.wikimedia.org/wikipedia/commons/7/78/Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg

export default function MvRow({title, items}){
    return (
        <div className="mvrow">
            <div className="mvrow-list-header">
                <div className="icon"><VscExtensions size={20} color="#FFF" /></div>
                <h2>{title}</h2>
            </div>
            
            <div className="mvrow-list">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div className="mvrow-item" key={key}>
                        <div className="img">
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src=`https://image.tmdb.org/t/p/w300${items.results[0].poster_path}`;
                                }}
                                alt={item.original_title}
                            />
                        </div>

                        <p>Meet the Strangest Spy Who Ever Lived</p>

                        <div className="user">
                            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg" alt="avatar" />

                            <div className="info" style={{marginLeft: '10px'}}>
                                <p>Thoughtly2</p>
                                <p style={{marginTop: '-10px'}}>15 horas atrás</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}