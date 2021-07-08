import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import Pagination from './common/Pagination'
import { Paginate } from '../utils/common'

export default function MovieTable(props) {

    const { movies: allMovies } = props
    const { length: movieCount } = allMovies;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const [movies, setMovies] = useState(Paginate(allMovies, currentPage, pageSize))


    useEffect(() => {
        setMovies(Paginate(allMovies, currentPage, pageSize))
    }, [allMovies])

    useEffect(() => {
        setMovies(Paginate(allMovies, currentPage, pageSize))
    }, [currentPage])

    const handleChangePage = page => {
        setCurrentPage(page)
        setMovies(Paginate(allMovies, currentPage, pageSize))
    }

    return (
        <div className="movie__table">
            <th colSpan="6" className="text-center m-5">There is {props.movies.length} movies</th>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieCount !== 0 ?
                            <>
                                {movies.map(movie => <Movie key={movie._id} title={movie.title} id={movie._id} genre={movie.genre.name} stock={movie.numberInStock} rate={movie.dailyRentalRate} deleteMovie={props.onDelete} />)}
                            </>
                            :
                            <td colSpan="6" className="text-center m-5">There is no movies</td>
                    }
                </tbody>
            </table>
            <Pagination count={movieCount} currentPage={currentPage} pageSize={pageSize} handleChangePage={handleChangePage} />
        </div>
    )
}
