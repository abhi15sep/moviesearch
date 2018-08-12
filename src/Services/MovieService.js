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
	getMoviesByGenres: (id, page = 1) => {
		return new Promise((resolve,reject) => {
			themoviedb.genres.getMovies({id, page}, (data) => resolve(JSON.parse(data)), 
			(error) => {
				console.error(error);
				reject(error);
			})
		})
	},
	getMovies: (page = 1) => {
		return new Promise((resolve,reject) => {
			themoviedb.discover.getMovies({page}, (data) => resolve(JSON.parse(data)), 
			(error) => {
				console.error(error);
				reject(error);
			})
		})
	},
	searchMovies: (keywords, page = 1) => {
		return new Promise((resolve,reject) => {
			const queryObj = (keywords && { query : keywords, page}) || {};
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