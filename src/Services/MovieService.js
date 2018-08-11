import themoviedb from 'Libs/themoviedb';

export default {
    getMovieGenres: () => {
		return new Promise((resolve,reject) => {
			themoviedb.genres.getMovieList({}, (data) => resolve(JSON.parse(data).genres), 
			(error) => {
				console.error(error);
				reject(error);
			})
		})
	},
	getMovies: () => {
		return new Promise((resolve,reject) => {
			themoviedb.discover.getMovies({}, (data) => resolve(JSON.parse(data)), 
			(error) => {
				console.error(error);
				reject(error);
			})
		})
	},
}