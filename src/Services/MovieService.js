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
	searchMovies: (keywords) => {
		return new Promise((resolve,reject) => {
			const queryObj = (keywords && { query : keywords}) || {};
			themoviedb.search.getMovie(queryObj, (data) => {
				return resolve(JSON.parse(data));
			}, 
			(error) => {
				console.error(error);
				reject(error);
			})
		})
	},
}